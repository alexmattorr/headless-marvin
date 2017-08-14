import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PageBuilder from 'components/PageBuilder';
import Albums from 'components/Albums';

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
        <PageBuilder />
        <Albums />
      </div>
    );
  }
}
