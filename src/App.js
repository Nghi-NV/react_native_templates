import React, { PureComponent } from 'react';
import { StyleSheet, View, StatusBar, AppState } from 'react-native';
import { connect } from 'react-redux';
import Router from './Router';

// Import codepush here

class App extends PureComponent {
  state = {
    appState: AppState.currentState
  }
  
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      console.log('App has come to the foreground!')
    }
    this.setState({appState: nextAppState});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={this.props.barStyle} />
        <Router />
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

};

const mapStateToProps = (state) => {
  return {
    barStyle: state.config.barStyle
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
