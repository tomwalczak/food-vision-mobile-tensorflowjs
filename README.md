## FoodVision Mobile 🍔 👀📱

![Demo](https://media.giphy.com/media/EBmtWTOA0ZgeMXP8Xg/giphy.gif)

(This project was inspired by [@mrdbourke's](https://github.com/mrdbourke) excellent TF course, check it out: [Tensorflow Deep Learning](https://github.com/mrdbourke/tensorflow-deep-learning) )

I was curious about how two well-known models, ResNet50 and ImageNet (trained on Food101 dataset), would perform runnining on a smartphone, in a browser using TensorFlow JS.

Using TFJS makes it very easy to test these models in the wild - would they perform OK?

My approach was to extract image features from ResNet50V2, ImageNetV2, fit them to Food101 dataset and finally convert them to Tensorflow JS.

The wrapper app is a ReactJS.
