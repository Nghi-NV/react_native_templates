import React from 'react';
import { StyleSheet, View , ActivityIndicator} from 'react-native';

const Loading = (props) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator 
        color="lightblue"
        size="small"
      />
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
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Loading;
