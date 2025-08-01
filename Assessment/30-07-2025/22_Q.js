/*
Create a small interactive script that:
    - Prompts the user to enter their birth year.
    - Calculates their current age.
    - Checks if they are a teenager, adult, or senior citizen.
*/

import createPromt from "prompt-sync";
const prompt = createPromt();

let year_of_birth = prompt("Enter your birth year : ");

// let date = new Date();
// date.setFullYear(year_of_birth);

let today = new Date();
while (!(year_of_birth <= today.getFullYear() && Number(year_of_birth)>1500))
{
    year_of_birth = prompt("Enter a valid year : ");
}

let age = today.getFullYear() - Number(year_of_birth);
console.log("your age is " + age +"\n");

if(age < 16)
{
    console.log("Child");
}
else if(age>=16  && age <18 )
{
    console.log("teenageer");
}
else if(age>=18 && age <=35)
{
    console.log("adult");
}
else
{
    console.log("senior citizen");
}