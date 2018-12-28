import React, { Component } from 'react';

import styles from './Dashboard.module.css';
import { Link, navigate } from "@reach/router";

import { getMonday } from '../../lib/datetime.js';

import ConsultantGroup from '../ConsultantGroup/ConsultantGroup';
import ConsultantTable from '../ConsultantTable/ConsultantTable';

class Dashboard extends Component {
  constructor(props) {
    super(props);


    if (!props.role) {
      navigate('/');
    }

    const monday = getMonday(new Date());

    this.state = {
      monday,
    }
  }

  render() {
    const { consultants, role } = this.props;
    const { monday } = this.state;

    return (
      <div className={styles['dashboard']}>
        <h1>{role} Dashboard</h1>
        { role === 'Team Lead' && (
          <ConsultantGroup />
        )}
        { role === 'Practice Manager' && (
          <div className={styles['card']}>
          <ConsultantTable
            consultants={consultants}
            currentMonday={monday}
            showConsultants
          />
            <div className={styles['actions']}>
              <Link to="/consultants/new">+ Add New Teammate</Link>
            </div>
            <div className={styles['actions']}>
              <Link to="/history/edit">Edit History</Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
