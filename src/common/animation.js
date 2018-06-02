/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import { LayoutAnimation } from 'react-native';

// Spring 
const CustomLayoutSpring = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7,
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7,
  },
};

// Linear with easing
const CustomLayoutLinear = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    springDamping: 0.7,
  },
};

export {
  CustomLayoutSpring,
  CustomLayoutLinear
};
