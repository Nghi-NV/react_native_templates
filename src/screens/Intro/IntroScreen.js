import React, { PureComponent } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class IntroScreen extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txtTitle}>
          Intro Screen
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  }
});

export default IntroScreen;
