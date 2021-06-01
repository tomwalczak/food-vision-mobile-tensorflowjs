/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useRef, useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import GitHubIcon from "@material-ui/icons/GitHub";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Grid container spacing={1} alignItems="center" justify="center">
      <Grid item>
        {" "}
        <GitHubIcon />
      </Grid>

      <Grid item>
        <Typography variant="body2" color="textSecondary" align="center">
          <Link color="inherit" href="https://github.com/tomwalczak">
            @tomwalczak
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  grey: {
    color: "grey",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SplashScreen = ({ handleClick, modelLoaded }) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          🍔 👀 📱
        </Typography>
        <Typography component="h1" variant="h5">
          Welcome to Food Vision Mobile!
        </Typography>
        <Typography component="p" variant="subtitle2" className={classes.grey}>
          (Works best on a smartphone)
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={() => {
            console.log(modelLoaded);
            if (modelLoaded) handleClick();
          }}
        >
          {modelLoaded ? "Let's go! 🧑‍🍳 " : "Loading models... 🤖 🦾  "}
        </Button>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SplashScreen;
