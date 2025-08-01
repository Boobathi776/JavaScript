// Formatting numbers
// toFixed(n)
let num = 12.2123412341234;
console.log(num);
console.log(num.toFixed(4));

// toPrecision()
// this controls total number of digits, not the decimal only
console.log(num.toPrecision(2)); // this is also return a value as string
console.log(num.toPrecision(5)); 

// toLocaleString()
// localized format with commas,currency
let currency = 1_23253452.1234;
console.log(currency);
console.log(currency.toLocaleString()); // this is also return the string value 


// currency
let price = 1234.10;
console.log(price.toLocaleString('en-US',{
    style:"currency",
    currency:'USD'
}));  // "$1,234.10"

let percent = 0.50;
console.log(percent.toLocaleString('en-US',{
    style:'percent',
    
}));  // "50%"


// indian  currency without hardcode the symbol
let formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 2
});

console.log(formatter.format(1234567.89));  // ₹12,34,567.89

// Template literals with formatted numbers
let amount = 99.99;
console.log(`Total : ₹${amount.toFixed(1)}`);

let value = null??10;
console.log(value);
let ter = 10>20 ? true : false;
console.log(ter);
console.log(typeof ter);

console.log(10);