const array1 = [1, 2, 3, 4, 5];

// using Array() constructor
const newarray1 = Array([10,20,30]);
newarray1[4]="string";
console.log(newarray1);
console.log(newarray1[0]);

// using Array.of() only
const newarray2 = Array.of(10,20,30,40,[1,2,3],1020);
console.log(newarray2);

const myMap = new Map([
    [1,"boobathi"],
    [2,"guru"],
    ["guhan","rajan"],
    [true,"welcome"]
])

console.log(myMap);

// Array.from() used to create an array from iterable values or objects 
const fromMapArray = Array.from(myMap);
console.log(fromMapArray);

// create a Map from the array
const fromArrayMap =new Map(fromMapArray);
console.log(fromArrayMap);

// to check the value is a array or not
console.log(Array.isArray(fromMapArray));


console.log(newarray2.includes(10));
console.log(newarray2.indexOf(10))
console.log(newarray2.at(4));
console.log(newarray2.at(4).at(1));  // we can put as many at we want if there is an array exist 
console.log(newarray2.lastIndexOf(10));
console.log(newarray2);

console.log(newarray2.find((num,index)=>num>20));

console.log(newarray2.findIndex(num=>num<30));

console.log(newarray2.findLast(num=>num>10));  //check from the last 

console.log(newarray2.findLastIndex(num => num<50)); //it checks from the last and give the first match from the array


console.log(newarray2.slice(1,3)); //return a array with [20,30]

console.log(newarray2.join("---+++===="));

console.log(newarray2.toString()); //separated by comma

console.log(newarray2.toLocaleString()); //same like normal toString()

const entry = newarray2.entries(); //this return a object that is iterator 
for(let [index , value] of entry)
{
    console.log(`${index} : ${value}`);
}

const newArray_keys = newarray2.keys();
for(let key of newArray_keys)
{
    console.log(key);
}

const newArry_values = newarray2.values();
for(let value of newArry_values)
{
    console.log(value)
}

console.log(newarray2.values());  //Object [Array Iterator] {}

console.log(newarray2.flat(1)); //we can give depth to mention how much deep you should flat the array

console.log(newarray2.flatMap((num)=>num*10,0)); //first it did the map() operation and then did the flat() opeartion on the array 

//  MUTATORS  (modify the original array)
const mutat_array = [100, 200, 300, 400, 500];
console.log(mutat_array.push(700)); // this will return the length of the array 
console.log(mutat_array);

console.log(mutat_array.pop());  //retrun the elementh that popped out fromt the array 

console.log(mutat_array.unshift(50)); //this is also like push() method return the lenght of the array 
console.log(mutat_array);

console.log(mutat_array.shift()) ; //this will return the value that is removed from the first of the array 
console.log(mutat_array);

console.log(mutat_array.reverse());// this is actually affect the original array so  [ 500, 400, 300, 200, 100 ]
console.log(mutat_array);  // [ 500, 400, 300, 200, 100 ]

mutat_array.reverse();
console.log(mutat_array);  //[ 100, 200, 300, 400, 500 ] again got its original form

mutat_array.push(70);
console.log(mutat_array.sort((a,b)=>a-b)); //.sort() converts numbers to strings and sorts lexicographically.
console.log(mutat_array);

console.log(mutat_array.splice(0,2,[10,20])); //return the deleted elements from the array  [ 70, 100 ]
console.log(mutat_array); //[ [ 10, 20 ], 200, 300, 400, 500 ]

console.log(mutat_array.splice(0,1,10,20,30)); //[ [ 10, 20 ] ]
console.log(mutat_array); //[ 10,  20,  30, 200,300, 400, 500]

console.log(mutat_array.fill("vanakam",2,4)); //[ 10, 20, 'vanakam', 'vanakam', 300, 400, 500 ]
console.log(mutat_array); //[ 10, 20, 'vanakam', 'vanakam', 300, 400, 500 ]

console.log(mutat_array.copyWithin(0,2,4))  // the first value where these values should be paste in the array
console.log(mutat_array);

// ITERATION METHODS 
const iter_array = ["HTML", "CSS", "JavaScript", "React"];

console.log(iter_array.map(val => "fruit : "+val)); //creates new array with changes
console.log(iter_array);

iter_array.forEach((val)=>console.log("fruit : "+val));  //this will return undefined after the excution of the forEach ends

console.log(iter_array.filter(value => value.includes("a")));

console.log(iter_array.reduce((value,current)=>value+=" = "+current));//return a single value

console.log(iter_array.reduceRight((value,current)=>value+=" = "+current));//return a single value

console.log(iter_array.some(value=>value.includes("SS"))); // the values that we give match with case sensive

console.log(iter_array.every(value=>value!==undefined));

console.log(iter_array.length);


// just create a copy doesn't modifies the original
console.log(iter_array.with(3,"React-js")); //used to modify a specific index in the array  [ 'HTML', 'CSS', 'JavaScript', 'React-js' ]
console.log(iter_array);

console.log(iter_array.toReversed());
console.log(iter_array);

console.log(iter_array.toSorted());
console.log(iter_array);

console.log(iter_array.toSpliced(0,2,"c#","java"));
console.log(iter_array);

// console.log(iter_array.group(value=>(value.includes("a")?"vanakam":"tata")));  //return a plain object 
// console.log(iter_array.groupToMap())//return a map


// const iter_array1 = ["apple", "banana", "car", "dog", "elephant"];

// const grouped = iter_array1.group(value => 
//   value.includes("a") ? "vanakam" : "tata"
// );

// console.log(grouped);

Array.prototype.last = function() //this function will return the last value of tha array we can write our own custom prototype 
{
    return this[this.length-1];
}


console.log(iter_array.last()); 


// const array2 = ["apple", "banana", "cherry"];
// const array3 = [true, false, true, false];
// const array4 = [10.5, 20.1, 30.9, 40.0];
// const array6 = [100, 200, 300, 400, 500];
// const array7 = ["sun", "moon", "stars"];
// const array8 = [null, undefined, NaN, 0, ""];
// const array9 = ["lion", "tiger", "leopard", "cheetah"];
// const array10 = [7, 14, 21, 28, 35];
