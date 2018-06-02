import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loading = (props) => {
  let { backgroundColor, colorIndicator } = props;
  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor } : undefined]}>
      <View style={styles.viewContent}>
        <ActivityIndicator
          color={colorIndicator ? colorIndicator : 'white'}
          size="large"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  viewContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  }
})

export default Loading;
