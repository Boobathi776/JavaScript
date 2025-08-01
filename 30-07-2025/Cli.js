// const args = process.argv;
// console.log(args);
// console.log("Full args array:", args);
// console.log("User args only:", args.slice(2)); // Skip the first 2 entries

// const name = args[2]; // Get first argument
// console.log(`Hello, ${name}!`);

const array = [];
array.slice(2,10);
const args2 = process.argv;
console.log(args2);
console.log(args2.slice(2));

args2.forEach((value,index,arr) => {
    console.log(`value at index ${index} is ${value}`); 
});