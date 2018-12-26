import React, { Component } from 'react';

import styles from './Login.module.css';

class Login extends Component {
  render() {
    const { role } = this.props;

    return (
      <div className={styles['login']}>
        { !role && (
          <div className={styles['login-block']}>
            <button
              className={styles['login-btn']}
              onClick={() => {this.props.login('Team Lead')}}
            >
              Login as Team Lead
            </button>
            <button
              className={styles['login-btn']}
              onClick={() => {this.props.login('Practice Manager')}}
            >
              Login as Practice Manager
            </button>
          </div>
        )}
        {role && (
          <div>
            <span>Logged in as {role}</span>
            <button
              className={styles['login-btn']}
              onClick={() => {this.props.login('')}}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Login;
