import createPrompt from "prompt-sync";
const prompt = createPrompt();
let name = prompt("Enter your name : ");
const namePattern = /^[a-zA-Z]{2,}(?:[ \.]?[a-zA-Z]{1,})$/;
while(!(name.length>0 && namePattern.test(name)))
{
    name = prompt("Enter a valid name : ");
}
console.log(name);