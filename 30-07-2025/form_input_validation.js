// import createPromt from "prompt-sync";
import method from "prompt-sync";
const value = method();
// let val = value("Enter your name : ")
// import chalk from "chalk";
// console.log(chalk.green("welcome to the world"));
const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!#@$%^&*()]).{8,}$/;
const pass = value("Enter your pssword  :   ");
if(passwordPattern.test(pass))
{
    console.log("valid pass");  
    console.log(passwordPattern.exec(pass));
}
else
{
    console.log("invalid password");
}


let date = new Date();
console.log(date.toLocaleDateString("en-IN",
    {
        weekday:"long",
        month:"long",
        year:"2-digit"
    }
));

let new_DAte = new Date("2004-02-10");
console.log(new_DAte);
console.log(new_DAte.toLocaleDateString());
