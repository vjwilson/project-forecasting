import React, { Component } from 'react';
import { Link, navigate } from "@reach/router";

import styles from './ConsultantDetail.module.css';

class ConsultantDetail extends Component {
  constructor(props) {
    super(props);

    const consultant =  props.consultants &&
      props.consultants.find(consultant => consultant.slug === props.consultantSlug);

    if (!props.consultantSlug || !consultant) {
      navigate('/');
    }

    this.state = {
      consultant,
    };
  }

  render() {
    const { consultant } = this.state || {};

    return (
      <div className={styles['consultant-detail']}>
        <h1>{`${consultant.firstName} ${consultant.lastName}`}</h1>
        <div className={styles['consultant-main']}>
          <div className={styles['consultant-info']}>
            <span>{consultant.title}</span>
            <span>{consultant.specialty}</span>
            <span>Utilization: 100%</span>
          </div>
          <div className={styles['consultant-schedule']}>
            <table>
              <thead>
                <tr>
                  <th>Week of 12/31 – 1/4</th>
                  <th>Week of 1/7 – 1/11</th>
                  <th>Week of 1/14 – 1/8</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>24 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles['actions']}>
          <Link to="/dashboard">« Back to Dashboard</Link>
        </div>
      </div>
    );
  }
}

export default ConsultantDetail;
