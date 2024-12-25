const months = document.getElementById("month-name");
const day = document.getElementById("day-name");
const number = document.getElementById("day-number");
const year = document.getElementById("year");

const date = new Date();
months.innerText = date.toLocaleString("en",{month:'long'})
day.innerText = date.toLocaleString("en",{weekday:'long'}) 
number.innerText = date.getDate();
year.innerText = date.getFullYear();