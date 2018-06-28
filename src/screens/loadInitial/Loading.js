/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { common } from '../../config/common';

import {
  setTheme, MKColor, MKButton,
  MKProgress,
  MKSpinner,
  MKRadioButton,
  MKCheckbox,
  MKTextField,
  MKSlider
} from 'react-native-material-kit';
import { Navbar } from '../../components';

class Loading extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          title='hello'
          leftIcon
          back
        />
        <View style={styles.content}>
          <Text style={{ fontSize: common.FONT_SIZE_HEADER }}>Loading Component</Text>
          <MKButton
            backgroundColor={'orange'}
            borderRadius={8}
            shadowRadius={2}
            shadowOffset={{ width: 0, height: 2 }}
            shadowOpacity={.7}
            shadowColor="black"
            style={{ width: 100, height: 60, justifyContent: 'center', alignItems: 'center' }}
            onPress={() => {
              console.log('hi, raised button!');
            }}
          >
            <Text pointerEvents="none"
              style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>
              RAISED BUTTON
          </Text>
          </MKButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.COLOR_BACKGROUND
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;
