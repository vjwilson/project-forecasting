export function getMonday(currentDate) {
  const d = new Date(currentDate);
  const day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

export function getUpcomingMondays(monday, weekCount = 8) {
  const weekOfMilliseconds = 604800000;

  const mondayList = [monday];
  for (let i = 1; i < weekCount; i++) {
    const nextMonday = new Date(monday.getTime() + (weekOfMilliseconds * i));
    mondayList.push(nextMonday);
  }

  return mondayList;
}

export function getShortWeekName(date) {
  const monthNames = [
    'Jan', 'Feb', 'Mar',
    'Apr', 'May', 'Jun', 'Jul',
    'Aug', 'Sept', 'Oct',
    'Nov', 'Dec'
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();

  return `${day}-${monthNames[monthIndex]}`;
}
