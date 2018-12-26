import React, { Component } from 'react';

import styles from './SplashPage.module.css';

class SplashPage extends Component {
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
      <div className={styles['splash']}>
        <h1>User Narratives</h1>
        <dl>
          <dt>Team Lead</dt>
          <dd>I am a Team Lead with 3 teammates. I meet with each teammate weekly to discuss their current projects and any issues that might be occurring. It’s my responsibility to communicate major project updates to my Practice Manager, who then shares this during the weekly Operations Meeting.</dd>
          <dt>Practice Manager</dt>
          <dd>I am a Practice Manager and oversee a team of 15 people. As a Practice Manager, it is my responsibility to monitor the practice’s utilization rate and alert the Operations team if we are at risk of not hitting our numbers, or if someone has been on the bench for an extended period of time.</dd>
        </dl>
      </div>
    );
  }
}

export default SplashPage;
