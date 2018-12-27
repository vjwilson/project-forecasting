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
          <div className={styles['card']}>
            <table className={styles['consultant-table']}>
              <thead>
                <tr>
                  <th className={styles['left-cell']}>Consultant</th>
                  <th className={styles['left-cell']}>Level</th>
                  <th className={styles['left-cell']}>Title</th>
                  <th className={styles['right-cell']}>This Week</th>
                  <th className={styles['right-cell']}>Next Week</th>
                  <th className={styles['right-cell']}>7-Jan</th>
                  <th className={styles['right-cell']}>14-Jan</th>
                  <th className={styles['right-cell']}>21-Jan</th>
                  <th className={styles['right-cell']}>28-Jan</th>
                  <th className={styles['right-cell']}>4-Feb</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Karissa Martindale</td>
                  <td className={styles['left-cell']}>Practice Manager</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Lesley Luciano</td>
                  <td className={styles['left-cell']}>Principal II</td>
                  <td className={styles['left-cell']}>UX Architect</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Matthew Tallman</td>
                  <td className={styles['left-cell']}>Practice Manager</td>
                  <td></td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Sarah Hudson</td>
                  <td className={styles['left-cell']}>Senior II</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Andria Wiser</td>
                  <td className={styles['left-cell']}>Senior I</td>
                  <td className={styles['left-cell']}>Designer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Ariana Sutton</td>
                  <td className={styles['left-cell']}>Staff II</td>
                  <td className={styles['left-cell']}>Designer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Ellen Boyette</td>
                  <td className={styles['left-cell']}>Staff II</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Erica Mitchell</td>
                  <td className={styles['left-cell']}>Staff I</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Gary Meyer</td>
                  <td className={styles['left-cell']}>Staff I</td>
                  <td className={styles['left-cell']}>Designer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Kiley LoCascio</td>
                  <td className={styles['left-cell']}></td>
                  <td className={styles['left-cell']}></td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Leilani Boyce</td>
                  <td className={styles['left-cell']}>Principal I</td>
                  <td className={styles['left-cell']}>UX Architect</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Rachael Bisbo</td>
                  <td className={styles['left-cell']}>Staff I</td>
                  <td className={styles['left-cell']}>UX Architect</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Rachel Cowles</td>
                  <td className={styles['left-cell']}>Associate II</td>
                  <td className={styles['left-cell']}>Designer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Sarah Doran</td>
                  <td className={styles['left-cell']}>Staff II</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
                <tr className={styles['body-row']}>
                  <td className={styles['left-cell']}>Van Wilson</td>
                  <td className={styles['left-cell']}>Senior II</td>
                  <td className={styles['left-cell']}>Front-end Developer</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                  <td className={styles['right-cell']}>40</td>
                </tr>
              </tbody>
            </table>
            <div className={styles['actions']}>
              <a href="">+ Add New Teammate</a>
            </div>
            <div className={styles['actions']}>
              <a href="">Edit History</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Dashboard;
