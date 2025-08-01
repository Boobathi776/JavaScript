// Enhance the above program to display whether the user is eligible to vote (18+).
import createPromt from "prompt-sync";
const prompt = createPromt();

let date_of_birth = prompt("Enter your Date of birth (YYYY-MM-DD) : ");

function age_calculator(dob)
{
    let today = new Date();
    let year_diff = today.getFullYear()-dob.getFullYear();
    // console.log("year  : "+year_diff);
    let Month_diff = today.getMonth()-dob.getMonth();
    // console.log("month  : "+Month_diff);
    let day_diff = today.getDate() - dob.getDate();
    // console.log("day  : "+day_diff);

    if( Month_diff<0 || (Month_diff===0 && day_diff<0) )
    {
        year_diff-=1;
    }
    return year_diff;
}

let actual_date = new Date(date_of_birth);
// console.log(actual_date);
// console.log(actual_date.toLocaleDateString());

while(isNaN(actual_date.getTime()) || actual_date > new Date())
{
    date_of_birth = prompt("Enter a valid date (YYYY-MM-DD) : ");
    actual_date = new Date(date_of_birth);
}

let age = age_calculator(actual_date);
 
// logic for find eligible or not 
if(age>18)
{
    console.log(`Your age is ${age}`);
    console.log("you are eligible to vote..!")
}
else
{
    console.log(`You are not eligible to vote...\n Wait for ${18-age} years to vote..!`);
}


