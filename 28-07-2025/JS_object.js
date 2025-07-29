// JavaScript Object literal 
const person = {
    name :"boobathi",
    age : 22,
    Learning : true,
    degree : "B.E"
}

console.log(person);

// using object()
let p1 = new Object();
p1.name="guhan";
p1.age = 23;
p1.Learning = true;

console.log(p1);

// constructor

function Person(name,age,Learning,degree)
{
    this.name=name;
    this.age = age;
    this.Learning = Learning;
    this.degree = degree;
}

let p2 = new Person("govardan",22,true,"B.E");
console.log(p2);


// using class and constructor keyword to create an object in JS
class Animal 
{
    constructor(type)
    {
        this.type = type;
    }
}

let dog = new Animal("dog");
console.log(dog);


// Accessing object properties 
console.log(p1.name);
console.log(p2.age);
console.log(dog.type);

// Bracket notation to access the properties of the object 
console.log(p2["name"]);

// modify and adding or deleting properties 
p2.name = "govardan n a";
delete p2.Learning;
console.log(p2);

for(let key in p2)
{
    console.log(key + ":"  + p2[key]+"/n");
}

console.log();
console.log();
Object.entries(p1).forEach(([key,value])=>
{
    console.log(`${key} : ${value}`);
}
)

// check for an property 
console.log(p1.hasOwnProperty("age"));

// nested objects 
let student = {
  name: "Guru",
  address: {
    city: "Thanjavur",
    pincode: 620008
  }
};

console.log(student.address.city);


// object methods
let employee = 
{
    name : "boobathi",
    DOB : new Date(2004,1,11),
    age : function()
    {
        console.log("welcome");
    }

}

console.log(employee.name);
console.log(employee.DOB);
employee.age();

// object destructuring
let {name , DOB} = employee;
console.log(name,DOB);