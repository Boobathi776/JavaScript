import createPrompt from 'prompt-sync';
const prompt = createPrompt();

// Check even or odd
let num = prompt("Enter a number : ")
if(!isNaN(num) && num.trim()!="")
{
    if(num%2==0)
    {
        console.log("The entered value is a even number....");
    }
    else
    {
        console.log("The entered value is a odd number...");
    }
}
else
{
    console.log("Invalid input make sure the given value is correct or not..");
}


// Number range checker
let number = prompt("Enter a number : ");
if(!isNaN(number) && number.trim()!="")
{
    if(number>=10  && number <=50)
    {
        console.log("The entered number in between 10 - 50");
    }
    else if(number>50  && number <=100)
    {
        console.log(" The enetered number in between 50 - 100");
    }
    else
    {
        console.log("out of range.............");
    }
}
else
{
    console.log("Enter a valid value....");
}