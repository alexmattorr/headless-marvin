import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {routeCodes} from 'config/routes';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      navigation: [
        {
          name: "About",
          url: '/about'
        }, {
          name: "Blog",
          url: '/blog'
        }
      ]
    }
  }

  render() {
    const navigation = this.state.navigation.map((item, index) => {
      return (
        <NavLink key={index} activeClassName='is-active' className='header-link' to={item.url}>{item.name}</NavLink>
      )
    });
    return (
      <header className='main-header row'>
        <div className='header-logo column small-6'>
          <NavLink className='header-link' exact to='/'>Headless Marvin</NavLink>
        </div>

        <div className='header-links column small-6'>
          {navigation}
        </div>
      </header>
    );
  }
}
