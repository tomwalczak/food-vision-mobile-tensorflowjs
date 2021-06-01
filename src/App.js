/* eslint-disable jsx-a11y/accessible-emoji */
// Import dependencies
import React, { useRef, useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import Grid from "@material-ui/core/Grid";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import * as tf from "@tensorflow/tfjs";
import Webcam from "react-webcam";

import SplashScreen from "./SplashScreen";
import PredCharts from "./PredCharts";

import "./App.css";

const food_classes_og = require("./food_classes.json");

function swap(json) {
  var ret = {};
  for (var key in json) {
    ret[json[key]] = key;
  }
  return ret;
}

function App() {
  const webcamRef = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [inferenceTime, setInferencetime] = React.useState(null);
  const [modelLoadedTime, setModelLoadedTime] = React.useState(null);

  const [isModelLoaded, setModelLoaded] = useState(false);
  const [isSplashScreen, setIsSplashScreen] = useState(true);

  const [preds, setPreds] = useState();

  const food_classes = swap(food_classes_og);

  const scaleFactor = tf.scalar(255);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    const { myValue } = event.currentTarget.dataset;
    console.log(myValue); // --> 123

    setAnchorEl(null);
  };

  const formatPreds = ({ preds, food_classes }) => {
    if (!preds) return "Loading predictions.. 🤖";

    const topPreds = tf.topk(preds, 5, true);

    const topPredsVals = topPreds.values.dataSync();
    const topPredsIndx = topPreds.indices.dataSync();

    const predChartData = [];
    topPredsIndx.forEach((predIdx, predNum) => {
      predChartData.push({
        food: food_classes[predIdx],
        prob: Math.round(topPredsVals[predNum] * 1000) / 10,
      });
    });
    return <PredCharts data={predChartData} />;
  };

  const renderModelStats = () => {
    return (
      <>
        <div>Model loaded in: {modelLoadedTime} ms</div>
        <div>Inference time was: {inferenceTime} ms</div>
      </>
    );
  };

  // Main function
  const run = async () => {
    const loadStart = new Date();

    const model = await tf.loadGraphModel(
      process.env.PUBLIC_URL + "/models/mobilenet_v2_js_model/model.json"
    );

    const loadTime = new Date() - loadStart;
    console.log(`Model loaded, took ${loadTime} ms`);
    setModelLoaded(true);
    setModelLoadedTime(loadTime);

    //  Loop and detect hands
    setInterval(() => {
      detect(model);
    }, 1000);
  };

  const detect = async (model) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;

      const vidTensor = tf.browser.fromPixels(video);

      const normalizedVid = vidTensor.div(scaleFactor).expandDims(0);

      // const normalizedVals = new Array(
      //   ...normalizedVid
      //     .dataSync()
      //     .filter((val, idx) => idx % 100 === 0)
      //     .map((val) => val * 100)
      // ).map((val) => Math.round(val) / 100);

      // setTfOutput(`Img tensor shape: ${normalizedVid.shape} <br />
      //              Tensor vals: <br/>
      //             ${normalizedVals.map((val) => val + " ")}`);

      const infrStart = new Date();

      const preds = model.predict(normalizedVid);
      const infrTime = new Date() - infrStart;

      setInferencetime(infrTime);
      setPreds(preds);
    }
  };

  useEffect(() => {
    run();
  }, []);

  // This is necessary, see React Webcam docs
  const videoConstraints = {
    width: 224,
    height: 224,
    facingMode: "environment",
  };

  if (isSplashScreen)
    return (
      <SplashScreen
        handleClick={() => {
          console.log("click!");
          setIsSplashScreen(false);
        }}
        modelLoaded={isModelLoaded}
      />
    );
  else
    return (
      <div className="App">
        <header className="App-header">
          <Grid
            container
            spacing={1}
            alignItems="center"
            style={{ fontSize: 20, margin: "0px auto" }}
          >
            <Grid item xs style={{ textAlign: "right" }}>
              Try model: 🤖{" "}
            </Grid>
            <Grid item xs style={{ textAlign: "left" }}>
              {" "}
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleMenuClick}
                variant="contained"
                color="secondary"
                size="small"
                endIcon={<ArrowDropDownIcon />}
              >
                ResNet50_10_pc_Food101_80Mb
              </Button>
            </Grid>
          </Grid>{" "}
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem data-my-value="eff_net1" onClick={handleMenuClose}>
              EfficientNetB0
            </MenuItem>
            <MenuItem data-my-value="eff_net2" onClick={handleMenuClose}>
              EfficientNetB0 100 % data
            </MenuItem>
            <MenuItem data-my-value="eff_net3" onClick={handleMenuClose}>
              EfficientNetB0 MixedPrecision
            </MenuItem>
          </Menu>
        </header>
        <div className="App-body">
          <Webcam
            ref={webcamRef}
            height={224}
            width={224}
            videoConstraints={videoConstraints}
            muted={true}
            style={{
              zindex: 8,
              width: "100vw",
              height: "100%",
            }}
          />
          <div
            style={{
              position: "absolute",
              padding: 10,
              bottom: 0,
              width: "80%",
              maxWidth: 450,
              height: 250,
              backgroundColor: "#000",
              textAlign: "left",
              fontSize: 14,
              zindex: 9,
              opacity: 0.8,
            }}
          >
            {preds && "What 🍔 🍕 🍏  is this? 👀"} <br />
            {formatPreds({ preds, food_classes })}
            {preds && renderModelStats()}
          </div>
        </div>
      </div>
    );
}

export default App;
