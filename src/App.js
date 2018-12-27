import React, { Component } from 'react';
import styles from './App.module.css';
import { Router, Link, navigate } from "@reach/router";

import AppHeader from './components/AppHeader/AppHeader';
import SplashPage from './components/SplashPage/SplashPage';
import Dashboard from './components/Dashboard/Dashboard';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      loading: false,
      page: 'splash',
    };
  }

  listConsultants = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => {
        const list = json.msg.map(person => (
          <li
            className={styles['consultant-list-item']}
            key={person.email}
          >
            <span>{person.firstName} {person.lastName}</span>
            <span>
              {person.title}
              {person.specialty && <span>, {person.specialty}</span>}
            </span>
          </li>
        ));

        this.setState({ loading: false, list })
      });

  }

  render() {
    const { loading, list } = this.state;

    return (
      <div>
        <button onClick={this.listConsultants('consultants')}>
          {loading ? 'Loading...' : 'Get Consultants'}
        </button>
        <br />
        <ul className={styles['consultant-list']}>{list}</ul>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'splash',
      role: '',
    };

    this.loginAs = this.loginAs.bind(this);
  }

  loginAs(role) {
    const page = (role)
      ? '/dashboard'
      : '/';

    this.setState({
      page,
      role,
    });

    navigate(page);
  }

  render() {
    const { page, role } = this.state;

    return (
      <div className={styles['app']}>
        <AppHeader
          login={this.loginAs}
          role={role}
        />
        <main className={styles['app-main']}>
          <Router>
            <SplashPage
              path="/"
            />
            <Dashboard
              path="/dashboard"
              role={role}
            />
          </Router>
          <LambdaDemo />
        </main>
      </div>
    );
  }
}

export default App;
