import React, { Component } from 'react';

import styles from './AppHeader.module.css';

import Login from '../Login/Login';

class AppHeader extends Component {
  render() {
    return (
      <header className={styles['app-header']}>
        <h1>Resouce Allocation</h1>
        <Login />
      </header>
    );
  }
}

export default AppHeader;
