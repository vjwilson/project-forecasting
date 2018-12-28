import React, { Component } from 'react';
import styles from './App.module.css';
import { Router, navigate } from "@reach/router";

import AppHeader from './components/AppHeader/AppHeader';
import SplashPage from './components/SplashPage/SplashPage';
import Dashboard from './components/Dashboard/Dashboard';
import ConsultantDetail from './components/ConsultantDetail/ConsultantDetail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      consultants: [],
      page: 'splash',
      role: '',
    };

    this.loginAs = this.loginAs.bind(this);
    this.apiGetConsultantHours = this.apiGetConsultantHours.bind(this);
  }

  componentDidMount() {
    this.apiGetConsultantHours();
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

  apiGetConsultantHours() {
    const urls = [
      '/.netlify/functions/consultants',
      '/.netlify/functions/hours',
    ];

    Promise.all(urls.map(url =>
      fetch(url)
        .then(resp => resp.json())
    )).then(jsons => {
      const consultants = jsons[0].msg;
      const hours = jsons[1].msg;
      const consultantsWithHours = consultants.map(grunt => {
        const gruntHours = hours[grunt.guid] || {};

        return {...grunt, hours: gruntHours };
      });

      console.log('consultantsWithHours', consultantsWithHours)
      this.setState({
        consultants: consultantsWithHours,
      });
    });
  }

  render() {
    const {
      consultants,
      role,
    } = this.state;

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
              consultants={consultants}
              path="/dashboard"
              role={role}
            />
            <ConsultantDetail
              consultants={consultants}
              path="consultants/:consultantSlug"
            />
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
