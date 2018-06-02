/**
* Created by nghinv on Thu May 31 2018
* Copyright (c) 2018 nghinv
*/

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import LoadInitialComponent from '../../screens/loadInitial';

class LoadInitial extends PureComponent {
  render() {
    return <LoadInitialComponent {...this.props} />
  }
}

const mapDispathToProps = {
  
}

const mapStateToProps = (state) => {
  return {
    languages: state.config.languages
  }
}

export default connect(mapStateToProps, mapDispathToProps)(LoadInitial);
