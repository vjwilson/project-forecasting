import React, { Component } from 'react';

import styles from './AppHeader.module.css';

import Login from '../Login/Login';

class AppHeader extends Component {
  render() {
    const { role } = this.props;

    return (
      <header className={styles['app-header']}>
        <h1>Resource Allocation</h1>
        <Login
          login={this.props.login}
          role={role}
        />
      </header>
    );
  }
}

export default AppHeader;
