import React, { Component } from 'react';

import styles from './Dashboard.module.css';

import ConsultantGroup from '../ConsultantGroup/ConsultantGroup';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: props.role,
    };
  }

  render() {
    const { role } = this.state;

    return (
      <div className={styles['dashboard']}>
        <h1>{role} Dashboard</h1>
        { role === 'Team Lead' && (
          <ConsultantGroup />
        )}
        { role === 'Practice Manager' && (
          <p>I am a Practice Manager and oversee a team of 15 people. As a Practice Manager, it is my responsibility to monitor the practice’s utilization rate and alert the Operations team if we are at risk of not hitting our numbers, or if someone has been on the bench for an extended period of time.</p>
        )}
      </div>
    );
  }
}

export default Dashboard;
