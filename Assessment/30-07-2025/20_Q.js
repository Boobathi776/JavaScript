// Ask the user for their name and greet them with 'Hello, [Name]!'
import createPromt from "prompt-sync";
const prompt = createPromt();

let user_name = prompt("Enter your name: ");
const name_pattern =/^[a-zA-Z]{3,}(?:[ \.]?[a-zA-Z]*)$/;

while(!( user_name.length>3 && name_pattern.test(user_name)))
{
    user_name = prompt("Enter a valid name : ");
}

console.log(`'Hello, ${user_name}!'`);