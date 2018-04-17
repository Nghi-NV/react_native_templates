'use strick';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-smart-splash-screen';
import { removeLog, setFont } from './common/utils';
import App from './App';
import { Loading } from './components';
import configureStore from './config/configureStore';

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

export default class Setup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      store: configureStore(() => {
        this.setState({ isLoading: false });
      })
    }
  }

  componentDidMount() {
    //SplashScreen.close(SplashScreen.animationType.scale, 850, 500)
    SplashScreen.close({
      animationType: SplashScreen.animationType.scale,
      duration: 850,
      delay: 500,
    })
  }

  render() {
    let { isLoading, store } = this.state;

    if (isLoading) {
      return <Loading />
    }

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
