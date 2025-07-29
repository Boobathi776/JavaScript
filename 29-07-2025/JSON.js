const user = {
  name: "Boobathi",
  age: 25,
  skills: ["JavaScript", "Node.js", "Git"]
};

const formatted = JSON.stringify(user,["name"], 1);
console.log(formatted);



let num = Number(10);
let num2 = new Number(10);
console.log(num==num2);
console.log(num===num2);