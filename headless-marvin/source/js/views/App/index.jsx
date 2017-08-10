import React, { Component } from 'react';
import Routes from 'config/routes';
import PropTypes from 'prop-types';

import Header from 'components/Global/Header';
import Footer from 'components/Global/Footer';

export default class App extends Component {
  // static propTypes = {
  //   children: PropTypes.object,
  // }

  render() {
    return (
      <div className='App'>
        <Header />

        <div className='Page row'>
          <Routes />
        </div>

        <Footer />
      </div>
    );
  }
}
