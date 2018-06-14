/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/
'use strick';

import React, { PureComponent } from 'react';
import { View, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { Scene, Router, Tabs, Stack, Actions } from 'react-native-router-flux';
import { transitionConfig, getSceneStyle } from './common/transitionConfig';

// import component
import LoadInitial from './container/loadInitial';

class AppNavigator extends PureComponent {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this._handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this._handleBackButton);
  }

  /**
   * function call when back android pressed
   * default return false, component will set Action.pop()
   * return true to overwrite
   */
  _handleBackButton = () => {
    switch (Actions.currentScene) {
      case 'loadingInitial':
        BackHandler.exitApp()
        return true
      default:
        return false
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Router getSceneStyle={getSceneStyle}>
          <Stack key='root' transitionConfig={transitionConfig}>
            <Scene
              key='loadingInitial'
              component={LoadInitial}
              swipeEnabled={false}
              panHandlers={null}
              direction='fade'
              hideNavBar
            />
          </Stack>
        </Router>
      </View>
    );
  }
}

const mapDispathToProps = {

}

const mapStateToProps = (state) => {
  return {
    languages: state.config.language,
    authen: state.authen.get('authenticated')
  }
}

export default connect(mapStateToProps, mapDispathToProps)(AppNavigator);
