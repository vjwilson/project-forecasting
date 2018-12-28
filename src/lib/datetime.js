export function getMonday(currentDate) {
  const d = new Date(currentDate);
  const day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6:1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}
