// Create a switch statement that prints the day of the week based on a variable dayNumber (1–7).
import createPromt from "prompt-sync";
const prompt = createPromt();
let number = prompt("Enter a number (1-7) : ");
while(!(!isNaN(number) && number>0 && number<8))
{
    number = prompt("Enter a vaild number(1-7) : ");
}

switch(Number(number))
{
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("There is no weekday with the given number");
}