// Write a simple form input validation snippet that ensures a username is at least 4 characters long.
import createPromt from "prompt-sync";
const prompt = createPromt();
let user_name = prompt("Enter your name (must be 4 char long) : ");
const name_pattern =/^[a-zA-Z]{4,}(?:[ \.]?[a-zA-Z]*){4,}$/;

while(!( user_name.length>3 && name_pattern.test(user_name)))
{
    user_name = prompt("Enter a valid name : ");
}

console.log(user_name);
