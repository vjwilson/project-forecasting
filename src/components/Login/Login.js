import React, { Component } from 'react';

import styles from './Login.module.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: '',
    };
  }

  login(role) {
    this.setState({
      role,
    });
  }

  render() {
    const { role } = this.state;

    return (
      <div className={styles['login']}>
        { !role && (
          <div className={styles['login-block']}>
            <button
              className={styles['login-btn']}
              onClick={() => {this.login('Team Lead')}}
            >
              Login as Team Lead
            </button>
            <button
              className={styles['login-btn']}
              onClick={() => {this.login('Practice Manager')}}
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
              onClick={() => {this.login('')}}
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
