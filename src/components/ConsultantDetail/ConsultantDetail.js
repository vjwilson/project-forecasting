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
            <table>
              <thead>
                <tr>
                  <th>Client</th>
                  <th>This Week</th>
                  <th>Next Week</th>
                  <th>7-Jan</th>
                  <th>14-Jan</th>
                  <th>21-Jan</th>
                  <th>28-Jan</th>
                  <th>4-Feb</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>24 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                </tr>
                <tr>
                  <th>Canteen</th>
                  <td>24 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                  <td>40 hours</td>
                </tr>
              </tbody>
            </table>
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
