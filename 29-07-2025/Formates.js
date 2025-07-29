let num1 = 200000000;

let formatter = new Intl.NumberFormat("en-IN",
    {
        style:"currency",
        currency:"IND"
    }
);

let value =formatter.format(num1);
console.log(value);
console.log(formatter.format(num1));

