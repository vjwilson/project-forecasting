import React, { Component } from 'react';
import { Link } from "@reach/router";

import { getUpcomingMondays, getShortWeekName } from '../../lib/datetime';
import { getProjectNames } from '../../lib/hours';

import styles from './ConsultantTable.module.css';

class ConsultantTable extends Component {
  constructor(props) {
    super(props);
    const upcomingMondays = getUpcomingMondays(props.currentMonday)
      .map(day => getShortWeekName(day));
    const consultantsWithClients = props.consultants.map(consultant => {
      const clients = getProjectNames(consultant.hours);

      return {...consultant, clients};
    });

    this.state = {
      consultants: consultantsWithClients,
      upcomingMondays,
    };
  }

  render() {
    const { showClients, showConsultants, showDetails } = this.props;
    const { consultants, upcomingMondays } = this.state;

    const rows = consultants.map(consultant => {
      const clientRows = consultant.clients.map(client => {
        const weekCells = consultant.clientTotals.map(week => {
          const weekTotals = Object.values(week)[0];
          const weekKey = Object.keys(week)[0]
          return (
            <td key={weekKey}className={styles['right-cell']}>{weekTotals[client] || 0}</td>
          );
        });
        return (
          <tr
            className={styles['body-row']}
            key={client}
          >
            <td>{client}</td>
            {weekCells}
          </tr>
        );
      });

      const grandTotals = consultant.clientTotals.map(week => {
        const weekTotals = Object.values(week)[0];
        const weekKey = Object.keys(week)[0]
        return (
          <td key={weekKey} className={styles['right-cell']}>{weekTotals.grandTotal || 0}</td>
        );
      });

      return (
        <React.Fragment>
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
            {showClients && (
              <th className={styles['left-cell']}></th>
            )}
            {grandTotals}
          </tr>
          {showClients && clientRows}
        </React.Fragment>
      );
    });

    return (
      <table className={styles['consultant-table']}>
        <thead>
          <tr>
            {showConsultants && (<th className={styles['left-cell']}>Consultant</th>)}
            {showClients && (<th className={styles['left-cell']}>Client</th>)}
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
