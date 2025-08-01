// Ask the user to input a number and display whether it's even or odd.
import createPromt from "prompt-sync";
const prompt = createPromt();

let number = prompt("Enter a number : ");

while (!(!isNaN(number) && number.length>0 )) {
    number = prompt("Enter a valid number  : ");
}

if (number % 2 === 0) {
    console.log(`${number} is a even number.`);
}
else {
    console.log(`${number} is a odd number.`);
}
