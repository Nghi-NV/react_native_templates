/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar, AppState } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from './app-navigator';
import * as types from './redux/types';
import { appStateChange } from './redux/actions/appState';

// Import codepush here

class App extends PureComponent {
  currentState = '';

  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.currentState !== nextAppState) {
      if (nextAppState === 'active') {
        this.props.appStateChange(types.APP_STATE_FOREGROUND);
      } else if (nextAppState === 'background') {
        this.props.appStateChange(types.APP_STATE_BACKGROUND);
      } else if (nextAppState === 'inactive') {
        this.props.appStateChange(types.APP_STATE_INACTIVE);
      }
    }

    this.currentState = nextAppState;
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.props.barStyle} />
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const mapDispatchToProps = {
  appStateChange
};

const mapStateToProps = (state) => {
  return {
    barStyle: state.config.barStyle
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
