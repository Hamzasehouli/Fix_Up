import React from 'react';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');

const setWidth = w => {
  return (width * 100) / w;
};
const setHeight = h => {
  return (height * 100) / h;
};

export default {setWidth, setHeight};
