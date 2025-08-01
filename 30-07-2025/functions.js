import chalk from "chalk";
// import chalk from "chalk";
function greet()
{
    console.log(chalk.bgCyan("welcome to the world of greate one piece"));
}
greet();

// Function Declaration
function add(a,b)
{
    return a+b;
}

let sum = add(10,20);
console.log(chalk.bgBlue("The sum of given value is ")+chalk.cyan(sum));


// function expression
const funct = function new_function(x,y)
{
    return chalk.bgMagenta(x*y+10);
}

console.log(funct(10,20));

//console.log(new_function(10,20)); //it won't work it will say new_function() is not defined 


const func_exp = function()
{
    console.log(chalk.italic("hey i am a function expression"));
    console.log(chalk.bold("to i look bold"))
}

func_exp();
console.log();

// Arrow function
// A shorter syntax for writing function expressions (introduced in ES6).
const show_banner =()=>console.log(chalk.bgGrey("hey i am text in arrows function with grey color..."));

show_banner();

const greet2 = () => console.log("Hi!");
const square = x => x * x;  //this means after the operation done it will return the value to the calling function
const getUser = () => ({ name: "Boobathi" });

greet2();
console.log(square(2));
console.log(getUser());

