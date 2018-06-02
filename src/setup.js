/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

'use strick';

import React, { PureComponent } from 'react';
import { LayoutAnimation } from 'react-native';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';
import { removeLog, setFont } from './common/utils';
import configureStore from './redux/configureStore';
import { CustomLayoutSpring } from './common/animation';
import App from './app';
import { Loading } from './components';

// Import sentry here

// Disable ignored remote debugger
console.ignoredYellowBox = ['Remote debugger'];

// Set font family default
setFont('Quicksand');

if (!__DEV__) {
  // Remove console.log() with production
  removeLog();

  // Install sentry here
}

export default class Setup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        LayoutAnimation.configureNext(CustomLayoutSpring);
        this.setState({ isLoading: false });
      })
    }
  }

  componentDidMount() {
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    });
  }

  render() {
    let { isLoading, store } = this.state;

    if (isLoading) {
      return <Loading backgroundColor='steelblue' colorIndicator='#ccc' />
    }

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
