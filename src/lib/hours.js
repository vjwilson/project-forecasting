import { getUpcomingMondays } from './datetime';

export function getHoursForUpcomingWeeks(consultant, monday) {
  const mondays = getUpcomingMondays(monday);

  return mondays.map(day => {
    return getHoursForWeek(consultant, day);
  });
}

export function getHoursForWeek(consultant, monday) {
  const dateKeys = getDateStrings(getDatesForWeek(monday));

  const hours = dateKeys.reduce((totalHours, weekday) => {
    const targetDate = consultant.hours[weekday] || [];
    return totalHours + getHoursInDate(targetDate);
  }, 0);

  return hours;
}

function getHoursInDate(targetDate) {
  return targetDate.reduce((sum, projectHours) => {
    const newHours = projectHours.hours || 0;
    return sum + newHours;
  }, 0);
}

function getDatesForWeek(monday) {
  const dayOfMilliseconds = 86400000;

  const tuesday = new Date(monday.getTime() + dayOfMilliseconds);
  const wednesday = new Date(tuesday.getTime() + dayOfMilliseconds);
  const thursday = new Date(wednesday.getTime() + dayOfMilliseconds);
  const friday = new Date(thursday.getTime() + dayOfMilliseconds);

  return [
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
  ];
}

function getDateStrings(weekList = []) {
  return weekList.map(date => date.toISOString().substr(0, 10))
}
