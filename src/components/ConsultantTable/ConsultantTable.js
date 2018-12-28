import React, { Component } from 'react';
import { Link } from "@reach/router";

import { getHoursForUpcomingWeeks } from '../../lib/hours';
import { getUpcomingMondays, getShortWeekName } from '../../lib/datetime';

import styles from './ConsultantTable.module.css';

class ConsultantTable extends Component {
  constructor(props) {
    super(props);

    const consultantsWithUpcomingWeekHours = props.consultants.map(consultant => {
      const hourTotals = getHoursForUpcomingWeeks(consultant, props.currentMonday);
      return {...consultant, hourTotals}
    });
    const upcomingMondays = getUpcomingMondays(props.currentMonday)
      .map(day => getShortWeekName(day));

    this.state = {
      consultants: consultantsWithUpcomingWeekHours,
      upcomingMondays,
    };
  }

  render() {
    const { showConsultants } = this.props;
    const { consultants, upcomingMondays } = this.state;

    const rows = consultants.map(consultant => {

      return (
        <tr
          className={styles['body-row']}
          key={consultant.guid}
        >
          {showConsultants && (
            <td className={styles['left-cell']}>
              <Link to={`/consultants/${consultant.slug}`}>
                {`${consultant.firstName} ${consultant.lastName}`}
              </Link>
              <div>{consultant.title}</div>
              <div>{consultant.specialty}</div>
            </td>
          )}
          <td className={styles['right-cell']}>{consultant.hourTotals[0]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[1]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[2]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[3]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[4]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[5]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[6]}</td>
          <td className={styles['right-cell']}>{consultant.hourTotals[6]}</td>
        </tr>
      );
    });

    return (
      <table className={styles['consultant-table']}>
        <thead>
          <tr>
            {showConsultants && (<th className={styles['left-cell']}>Consultant</th>)}
            <th className={styles['right-cell']}>This Week</th>
            <th className={styles['right-cell']}>Next Week</th>
            <th className={styles['right-cell']}>{upcomingMondays[2]}</th>
            <th className={styles['right-cell']}>{upcomingMondays[3]}</th>
            <th className={styles['right-cell']}>{upcomingMondays[4]}</th>
            <th className={styles['right-cell']}>{upcomingMondays[5]}</th>
            <th className={styles['right-cell']}>{upcomingMondays[6]}</th>
            <th className={styles['right-cell']}>{upcomingMondays[7]}</th>
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
