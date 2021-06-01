# FoodVision Mobile 🍔 👀📱

**TLDR;** Cool ReactJS app using TensorFlow JS to classify images of food. You can select from 3 different models and see how they perform!

(This project was inspired by [@mrdbourke's](https://github.com/mrdbourke) excellent TF course, check it out: [Tensorflow Deep Learning](https://github.com/mrdbourke/tensorflow-deep-learning) )

![Demo](https://media.giphy.com/media/c3fAip8pJ7clNR7OPj/giphy-downsized-large.gif)

## Try out the [live app here](https://tomwalczak.github.io/food-vision-mobile-tensorflowjs/)

---

I was curious about how ResNet50 and ImageNet (trained on Food101 dataset), would perform running on a smartphone, in a browser using TensorFlow JS.

Using TFJS makes it very easy to test these models in the wild - would they perform OK?

My approach was to extract image features from ResNet50V2 and ImageNetV2, fit them to Food101 dataset and finally convert to Tensorflow JS.

It turns out that EfficientNet's built-in Keras scaling layers are not compatible with TFJS, so the model would have to be re-created and trained from scratch.

The wrapper app is ReactJS.
