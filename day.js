function dayOfTheWeek(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
  "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

function greeting(date) {
  return (`Hello, world! Happy ${dayOfTheWeek(date)}---now from a file!`);
}
