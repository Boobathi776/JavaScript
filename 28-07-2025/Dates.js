let now_Date = new Date();
console.log(now_Date);  //current date plus time

// getting date components
let d = new Date();
console.log(d.getDate());
console.log(d.getMonth());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getTime());
console.log(d.getMilliseconds());
console.log(d.getMinutes());
console.log(d.getTimezoneOffset());

// setting date components
let d1 = new Date();
d1.setFullYear(2026);
d1.setMonth(11); //december month
d1.setDate(12);
d1.setHours(10);
d1.setMinutes(59);
console.log(d1);

console.log("/n/n")
// Date formats
console.log(d1.toString());
console.log(d1.toDateString());
console.log(d1.toTimeString());
console.log(d1.toISOString());
console.log(d1.toLocaleString());


console.log(Date.now());

// Date mathematics
let d3 = new Date();
console.log(d3.getMonth()+6);