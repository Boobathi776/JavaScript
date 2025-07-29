import createPrompt from 'prompt-sync';
const prompt = createPrompt();
let num1 = prompt("Enter the first number : ");
if (Number(num1) >= 0 && !isNaN(num1)) {
    console.log("The entered value is a number..." + num1);
}
else {
    console.log("invalid value it can't be converted to number..");
}


// string input validation
let first_name = prompt("Enter your name to proceed : ");
if (first_name.length > 0) {
    console.log(`hey welcome ${first_name}`);
}
else {
    console.log("invalid string value is getting entered......");
}

