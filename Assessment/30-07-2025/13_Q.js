//Format today’s date to "DD-MM-YYYY" using JavaScript's Date object.
let date = new Date();

console.log(date);  //2025-07-30T09:03:18.705Z

console.log(`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`);  //30-7-2025

console.log(date.toLocaleDateString("en-IN"));
