/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { common } from '../../config/common';

class Loading extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: common.FONT_SIZE_HEADER }}>Loading Component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: common.COLOR_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Loading;
