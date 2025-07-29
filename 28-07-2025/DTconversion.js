// String conversion
let value = 123;
console.log(value+"456"); //123456 string value and implicit convertion

// explicit
console.log(String(value));
console.log((123).toString());

// Number conversion
// implicit
let num = "5"*10*"2"; // only + and / operator doesn't work as expected because it has some behaviour like concatenation.
console.log(num);
// explicit
let string_value = "123";
console.log(Number(string_value));
let float_value = 123.50;
console.log(parseFloat(float_value));
console.log(parseInt(float_value)); //doesn't maintain the decimal values because it is int

// Boolean conversion
// implicit
if("hello")
{
  console.log("true");
}


// continuation in Falsy_values.js