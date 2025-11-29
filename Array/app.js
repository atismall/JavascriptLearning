const date = new Date();
console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliSeconds = date.getMilliseconds();

console.log(`YEAR : ${year}
MONTH: ${month}
DAY: ${day}
HOURS: ${hours}
MINUTES: ${minutes}
SECONDS: ${seconds}
MILLISECONDS: ${milliSeconds}
  `);
