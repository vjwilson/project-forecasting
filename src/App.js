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
    this.apiGetConsultants = this.apiGetConsultants.bind(this);
  }

  componentDidMount() {
    this.apiGetConsultants();
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

  apiGetConsultants() {
    fetch('/.netlify/functions/consultants')
      .then(response => response.json())
      .then(json => {
        this.setState({ consultants: json.msg })
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
