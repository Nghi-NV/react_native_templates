/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

import React from 'react';
import { StyleSheet, Text, Dimensions, NativeModules, Platform, Linking, StatusBar } from 'react-native';
import DeviceInfo from 'react-native-device-info';

const WWW_URL_PATTERN = /^www\./i;

export const safeAreaInsetX = { top: 24, bottom: 34 };
export const paddingX = safeAreaInsetX.top;

// The height of the navigation bar itself
export const navigationBarHeight = 44;
export const statusBarHeight = Platform.select({ ios: 20, android: StatusBar.currentHeight });

/*
* function detected device is iphoneX
* return true when device is iphoneX
*/
export const isX = (() => {
  return (
    Platform.OS === 'ios' && DeviceInfo.getModel() === 'iPhone X'
  );
})();

/*
* Function remove console.log, console.error, console.warning
*/
export const removeLog = () => {
  console = {};
  console.log = () => { };
  console.error = () => { };
  console.warning = () => { };
}

/*
* Function set font default
* @param fonts like: 'Quicksand'
*/
export const setFont = (font) => {
  const styles = StyleSheet.create({
    defaultFontFamily: {
      fontFamily: font
    }
  });

  const oldRender = Text.prototype.render;
  Text.prototype.render = function (...args) {
    const origin = oldRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultFontFamily, origin.props.style]
    });
  }
}

/*
* Function get key language default
* return language English if Device Country is not Vietnamese
*/
export const getLanguageDefault = () => {
  const code = DeviceInfo.getDeviceCountry();

  const defaultLanguage = code === 'VN' ? 'vi' : 'en';

  return defaultLanguage;
}

/*
* Function open url on web brower
*/
export const openUrl = (url) => {
  try {
    if (WWW_URL_PATTERN.test(url)) {
      this.onUrlPress(`http://${url}`);
    } else {
      Linking.canOpenURL(url).then((supported) => {
        if (!supported) {
          console.log('No handler for URL:', url);
        } else {
          Linking.openURL(url)
            .catch(e => {
              console.log('error', e)
            })
        }
      });
    }
  } catch (e) { }
}
