// Write a simple if-else statement that checks if a number is positive, negative, or zero.
import createPromt from "prompt-sync";
const prompt = createPromt();
let number = prompt("Enter a number : ");

while (!(!isNaN(number) && number.length>0 )) {
    number = prompt("Enter a valid number  : ");
}

if(!isNaN(Number(number)))
{
    if(number>0)
    {
        console.log("Positive");
    }
    else if(number < 0)
    {
        console.log("Negative");
    }
    else 
    {
        console.log("Zero");
    }
}
else 
{
    console.log("invalid number.....");
}