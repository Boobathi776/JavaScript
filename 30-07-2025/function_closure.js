// function outer()
// {
//     let count = 0;
//     return function inner()
//     {
//         count++;
//         console.log(count);
//     };
// }

// const counter = outer();  //this will return the inner() function that is with in the outer function 
// counter(); //1
// counter(); //2
// counter(); //3
// counter(); //4


const object = {
    name:"boobathi",
    age : "22",
    counter : function()
    {
        let count = 0;
        return{
        increment:function()
        {
            count++;
            console.log(count);
        },
        decrement:function()
        {
            count--;
            console.log(count);
        }
    }

    }
}

const counter = object.counter();

counter.increment();
counter.increment();
counter.decrement();




// IIEF  Immediately Invoked Function Expression (IIFE)
const counter2 = (function() {
  let count = 0;
  return {
    increment: function() {
      count++;
      return count;
    },
    decrement: function() {
      count--;
      return count; 
    }
  };
})();

console.log(counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
