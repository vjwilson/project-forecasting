import React, { Component } from 'react';
import { Link, navigate } from "@reach/router";

import { getMonday } from '../../lib/datetime.js';

import styles from './ConsultantDetail.module.css';

import ConsultantTable from '../ConsultantTable/ConsultantTable';

class ConsultantDetail extends Component {
  constructor(props) {
    super(props);

    const consultant =  props.consultants &&
      props.consultants.find(consultant => consultant.slug === props.consultantSlug);

    if (!props.consultantSlug || !consultant) {
      navigate('/');
    }

    const monday = getMonday(new Date());

    this.state = {
      consultant,
      monday,
    };
  }

  render() {
    const { consultant, monday } = this.state || {};

    const skills = consultant.talents.map(skill => (
      <li key={skill}>{skill}</li>
    ));
    return (
      <div className={styles['consultant-detail']}>
        <h1>{`${consultant.firstName} ${consultant.lastName}`}</h1>
        <div className={styles['consultant-main']}>
          <div className={styles['consultant-info']}>
            <div>
              <div>{consultant.title}</div>
              <div>{consultant.specialty}</div>
            </div>
            <div>Utilization: 100%</div>
          </div>
          <div className={styles['consultant-schedule']}>
            <ConsultantTable
              consultants={[consultant]}
              currentMonday={monday}
            />
          </div>
        </div>
        <section className={styles['skills']}>
        <h2>Mad Skills:</h2>
          <ul>
            {skills}
          </ul>
        </section>
        <div className={styles['actions']}>
          <Link to="/dashboard">« Back to Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default ConsultantDetail;
