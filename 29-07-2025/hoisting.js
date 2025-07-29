const func = ()=>console.log(value);
// func() this will throw error because there is now such variable with value above this 
let value = 100;

func();


// 2.
function test() {
  var foo = 33;
  if (foo) {
   // let foo = foo + 55; // it will show reference error 
    foo = foo + 55; 
    console.log(foo);
  }
}
test();


const n = {a:[1,2,3,4]};
console.log(n.a);

for(let a of n.a) //use for of when working with arrays and strings 
{
    console.log(a);
}