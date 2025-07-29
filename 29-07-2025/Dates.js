
// find the age 
let dob = new Date("2004-02-10"); //YYYY-MM-DD
console.log(dob);

// custom date
const customDate = new Date(2025, 6, 29);  // Year, Month (0-based), Day
console.log(customDate);  // July 29, 2025

// Date formatting 
const d = new Date();
console.log(d.toDateString());   // "Tue Jul 29 2025"
console.log(d.toISOString());    // "2025-07-29T04:30:00.000Z"
console.log(d.toLocaleDateString());  // "29/07/2025" (India)


// difference between dates in days
let day1 = new Date("2004-02-10");
let today = new Date();
if(day1 < today)
{
    let diff_time = today - day1;
    console.log(diff_time);

    // difference in days
    let diff_days = diff_time / (1000*60*60*24);
    console.log(diff_days);

    let years  = diff_days / 365;
    console.log(Number(years.toFixed(0)));
}