import React, { Component } from 'react';

import styles from './ConsultantGroup.module.css';

class ConsultantGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      role: props.role,
    };
  }

  render() {
    const { role } = this.state;

    return (
      <ul className={styles['consultant-group']}>
        <li className={styles['consultant']}>
          <div className={styles['consultant-info']}>
            <span className={styles['consultant-name']}>Anna Karenina</span>
            <span>Staff I</span>
            <span>UX Architext</span>
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
        </li>
        <li className={styles['consultant']}>
          <div className={styles['consultant-info']}>
            <span className={styles['consultant-name']}>Emma Woodhouse</span>
            <span>Staff I</span>
            <span>UX Architext</span>
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
        </li>
        <li className={styles['consultant']}>
          <div className={styles['consultant-info']}>
            <span className={styles['consultant-name']}>Jack Tanner</span>
            <span>Staff I</span>
            <span>UX Architext</span>
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
        </li>
      </ul>
    );
  }
}

export default ConsultantGroup;
