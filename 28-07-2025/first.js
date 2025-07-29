console.log("i hope node is working....");


function greet(name) {
    console.log(`hi ${name} how are you doing......`);
}

greet("Boobathi");



// to read input from the user in CMD
// import readline from 'node:readline';
// const rl = readline.createInterface(
//     {
//         input: process.stdin,
//         output: process.stdout
//     });

// rl.question(chalk.green("Enter your name"), function (name) {
//     let userName = name;
//     rl.question("Enter your age : ", function (age) {
//         console.log(`welcome to the world mr.${userName} with a age of ${age}`);
//         rl.close();
//     });
// });


// its a way to color the cmd using chalk package
import chalk from "chalk";
import { parse } from 'node:path';
// console.log(chalk.green("This is a green text"));
// console.log(chalk.red("This is red color text"));
// console.log(chalk.bgBlue("This is a bg blue color"));

// input validation

// let number;
// rl.question("Enter a number : ",(number)=>
// {
//     if(!isNaN(number)&&number.trim()!="")
//     {
//         console.log(`You entered a valid number : ${number}`);
//     }
//     else
//     {
//         console.log(`Invalid number is entered..`);
//     }
//     rl.close();
// });



// JSON"
let person = {"name":"boobathi","age":22};
let json_string = JSON.stringify(person);
console.log(json_string);
console.log(typeof json_string);

let parsed = JSON.parse(json_string);
console.log(parsed);
console.log(typeof parsed);


let obj = {value:10};
console.log(obj+5);