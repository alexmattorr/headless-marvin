import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

@connect(state => ({
  asyncData: state.app.get('asyncData'),
  asyncError: state.app.get('asyncError'),
  asyncLoading: state.app.get('asyncLoading'),
  counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {

  render() {
    return (
      <div className='Dashboard'>
        <h1>HeadlessMarvin</h1>
        <p>Boilerplate for kicking off React/Redux applications with wordpress.</p>
      </div>
    );
  }
}
