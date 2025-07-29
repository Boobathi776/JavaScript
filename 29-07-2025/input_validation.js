import createPrompt from 'prompt-sync';
const prompt = createPrompt();
// name validation

let name = prompt("Enter your name : ");
const pattern = /^[a-zA-Z]{2,}(?:[ \.]?[a-zA-Z]{1,})(?:[ \.]?[a-zA-Z]{1,})$/;
if(pattern.test(name.trim()))
{
    console.log(name);
}
else
{
    console.log("invalid name");
}


// password validation

const password = prompt("Enter password: ");

const pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if (pattern2.test(password)) {
    console.log("Valid strong password!");
} else {
    console.log("Invalid password: must have at least one lowercase, one uppercase, one number, and be 8+ characters long.");
}


// Email validation

const emailpattern=/^\S+@\S+\.\S+$/;
let email = prompt("Enter your mail id : ");
if (emailpattern.test(email))
{
    console.log("valid mail id....")
}
else
{
    console.log("invalid mail id.........");
}

// indian mobile number validation

const indMobileNumber = /^[6-9][1-9]{9}$/;
let mobile = prompt("Enter your mobile number : ");
if(indMobileNumber.test(mobile))
{
    console.log("valid mobile number");
}
else 
{
    console.log("invalid mobile number");
}


// allow only eligeble persons 

let age = prompt("Enter your age to vote : ");
if(age>=18 && age <=50)
{
    console.log("you can vote now");
}
else
{
    console.log("you can't vote now...");
}

// find the age of the person 

let date_of_birth = prompt("Enter your date of birth (YYYY-MM-DD) : ");
let acutal_Date = new Date(date_of_birth);
if(!isNaN(acutal_Date.getTime()))
{
    console.log("valid date   :  "+acutal_Date.toLocaleDateString());
    let today = new Date();
    let year_diff = today.getFullYear() - acutal_Date.getFullYear();
    let month_diff = today.getMonth() - acutal_Date.getMonth();
    let day_diff = today.getDate() - acutal_Date.getDate();
    if(month_diff<0 || (month_diff===0 && day_diff < 0 ))
    {
        year_diff--;
        console.log(year_diff);
    }
    else 
    {
        console.log(year_diff);
    }
}


// another way of get input from the user

import readline from "readline";
const rl = readline.createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
);  

rl.question("Enter your name ",function(name)
{
    console.log(name);
    rl.close();
})

