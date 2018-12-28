import React, { Component } from 'react';
import { Link } from "@reach/router";

import { getHoursForUpcomingWeeks, getHoursForWeek } from '../../lib/hours.js';

import styles from './ConsultantTable.module.css';

class ConsultantTable extends Component {
  constructor(props) {
    super(props);

    const consultantsWithUpcomingWeekHours = props.consultants.map(consultant => {
      const hourTotals = getHoursForUpcomingWeeks(consultant, props.currentMonday);
      return {...consultant, hourTotals}
    });

    this.state = {
      consultants: consultantsWithUpcomingWeekHours,
    };
  }

  render() {
    const rows = this.state.consultants.map(consultant => {

      return (
        <tr
          className={styles['body-row']}
          key={consultant.guid}
        >
          <td className={styles['left-cell']}>
            <Link to={`/consultants/${consultant.slug}`}>
              {`${consultant.firstName} ${consultant.lastName}`}
            </Link>
          </td>
          <td className={styles['left-cell']}>{consultant.title}</td>
          <td className={styles['left-cell']}>{consultant.specialty}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[0]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[1]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[2]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[3]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[4]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[5]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[6]}</td>
        </tr>
      );
    });

    return (
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
          {rows}
        </tbody>
      </table>
    );
  }
}

export default ConsultantTable;
