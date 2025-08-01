// const arr = process.argv;
// console.log(arr);

const welcome = function* ()
{
    return yield 10;
    return  yield 20;
    return yield 30;
}


console.log(Number(welcome()));


console.log("=========================================================================================");

for(let i=1;i<=30;i++)
{
    if(i%3===0)
    {
        console.log("Fizz");
    }
    else if(i%5===0) console.log("Buzz");
    else console.log("FizzBuzz");
}

