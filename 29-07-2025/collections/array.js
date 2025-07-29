// Array
// mutliple ways to create an array
const myArray1= [1,2,3,4,5,6,7,8];
console.log(myArray1);
const myArray2 = Array(10,20,30,40,50,60,70,80,90,100);
console.log(myArray2);
const myArray3 = new Array(myArray2);
console.log(myArray3);

const myArray4 = []; 
myArray4.length = 10;
for(let i in myArray4)
{
    console.log(i);
}

console.log(myArray4.length);

console.log("\n\n");

// create an element with single value 
const single_value_arr = [42];

// array with size not with the value 
const arr_with_size = Array(10); // array with lenght of 10 
console.log(arr_with_size);

// the above line is equivalent to this part
const myArray5 = []; 
myArray5.length = 10;

// invalid array creation this will throw error 
//const invalid_arr = Array(9.5); //we can't create array using float values

// array with single value creation 
const single_Arr = Array.of(9.3,10.5);
console.log(single_Arr);



// Referring to array elements
const arr = ["one", "two", "three"];
console.log(arr[2]);//three
console.log(arr["length"]); //3


// length
const cats1 = [];
cats1[30] = ["Dusty"];
console.log(cats1.length); // 31

// remove items from the array without using pop 
const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // [ 'Dusty', 'Misty' ] - Twiggy has been removed

cats.length = 0;
console.log(cats); // []; the cats array is empty

cats.length = 3;
console.log(cats + "\n"); // [ <3 empty items> ]


// iterate over arrays
const colors = ["red","green","yellow"];
for(let x of colors)
{
    console.log(x);
}


// foreach method 
colors.forEach((color)=>console.log(color + "\n"));

// forEach notes 
/**
 *  Unassigned values are not iterated in a forEach loop.

Note that the elements of an array that are omitted when the array is defined 
are not listed when iterating by forEach, but are listed when undefined has been
manually assigned to the element:
 */
const sparseArray = ["first", "second", , "fourth"]; //the value thrid is missing also it will be ignored by foreach

// using foreach
sparseArray.forEach((element) => {
  console.log(element);
});
//output by using forEach -> before we give value undefined manually
// first
// second
// fourth

// using for in
for(let value=0;value<sparseArray.length;value++)  //this loop will show the value "undefined" for that missing value but forEach or for in don't
{
    console.log(sparseArray[value]);
}

console.log("\n");

// if we define the value for any of the element undefined manually then the forEach will consider that value and show in result
if (sparseArray[2] === undefined) {
  console.log("sparseArray[2] is undefined"); // true
}

const nonsparseArray = ["first", "second", undefined, "fourth"];

nonsparseArray.forEach((element) => {  //now the foreach show the result with undefined 
  console.log(element);
});

// first
// second
// undefined
// fourth
console.log("---------------------------------------concat()--------------------------------------------------------------");

// Array methods 
// concat() -> joins two or more arrays and returns a new array 
let concat_array =myArray1.concat(myArray2);
console.log(concat_array);
console.log("------------------------------------join()-----------------------------------------------------------------");

//join() -> joins all elements of an array into a string 
const weather_array = ["Wind", "Rain", "Fire"];
let weather_string = weather_array.join("-");
console.log(weather_string);
console.log("-----------------------------------------push()------------------------------------------------------------");

// push() -> method adds one or more elements to the end of an array and returns the resulting length of the array 
const sample_array = [1,2];
sample_array.push(3,4,4,5,6); //we can add as much values as we want in single push 
let lenght_of_array = sample_array.push(7);
console.log(`lenght of an array is : ${lenght_of_array}`);  // so that means the push method add the element to the array and return the lenght of an array
console.log(sample_array);

console.log("------------------------------------------pop()-----------------------------------------------------------");
//pop() -> removes the last element from an array and returns that element.
const pop_array = [1,2,3,4];
let popped_element = pop_array.pop(); //remove the element that is in the last index 
console.log(`The popped element from the array is : ${popped_element}`);
console.log(pop_array);

console.log("------------------------------------------shift()-----------------------------------------------------------");

// shift() -> method removes the first element from an array and returns that element.
const shift_array = ["1", "2", "3"];
const first = shift_array.shift(); // the first value removed from the array and returned that value
console.log(first);  
console.log(shift_array);

console.log("-----------------------------------------unshift()------------------------------------------------------------");

// unshift() -> method adds one or more elements to the front of an array and returns the new length of the array.
const unshift_array = ["1", "2", "3"];
 let lenth_of_array = unshift_array.unshift("4", "5");
console.log(`The lengh of the array after unshift is ${lenth_of_array}`);
console.log(unshift_array);

console.log("-----------------------------------------slice()------------------------------------------------------------");

// slice() -> method extracts a section of an array and returns a new array.
const slice_array =  ["a", "b", "c", "d", "e"];
const new_array = slice_array.slice(1); //if we give start value only , it will take all the values after that index 
console.log("array that get only by give start index : "+ new_array);
const new_array_2 = slice_array.slice(0,3);
console.log("array that get by giving start and end index  : "+ new_array_2);


console.log("-------------------------------------------at()----------------------------------------------------------");

//at() -> method returns the element at the specified index in the array, or undefined if the index is out of range. 
          // It's notably used for negative indices that access elements from the end of the array.
const at_array =  ["a", "b", "c", "d", "e"];
console.log(at_array.at(-2));  //return undefined if the index not in the array , this will not show any error to us if not present 
console.log(at_array.at(15));  // 15 th index not in my array but it shows "undefined"

console.log("--------------------------------------------splice()---------------------------------------------------------");
//splice() -> method removes elements from an array and (optionally) replaces them. It returns the items which were removed from the array.
const splice_array = ["1", "2", "3", "4", "5"];
let return_value = splice_array.splice(1, 3, "a", "b", "c", "d");
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements('2','3','4' was removed from the array) there, and then inserted all consecutive
// elements in its place. 
console.log("after spliced array:");
console.log(splice_array);
console.log("values removed from the splice_array:");
console.log(return_value);

console.log("------------------------------------reverse()-----------------------------------------------------------------");
const myArray_10 = ["1", "2", "3","4","5","6"];
console.log(myArray_10.reverse());

console.log("---------------------------------------flat()--------------------------------------------------------------");
//flat() -> method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
let myArray_flat = [1, 2, [3, 4]];
myArray_flat = myArray_flat.flat();
console.log(myArray_flat);
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened

console.log("-----------------------------------------sort()------------------------------------------------------------");
//sort() ->  method sorts the elements of an array in place, and returns a reference to the array.
const myArray_sort = ["Wind", "Rain", "Fire"];
let return_value_2= myArray_sort.sort();
console.log(myArray_sort);
console.log(`The value that is retured from the array : ${return_value_2}`); //nothing but a array that is change now or new array
// sorts the array so that myArray = ["Fire", "Rain", "Wind"]

console.log("-------------------------------------indexof()----------------------------------------------------------------");
//index0f() -> method searches the array for searchElement and returns the index of the first match.
const a = ["a", "b", "a", "b", "a"];
console.log(a.indexOf("b")); // 1

// Now try again, starting from after the last match
console.log(a.indexOf("b", 2)); // the values which is mentioned after the actual value is the index of saying from which index the seach should begin (default from 0)
console.log(a.indexOf("z")); // -1, because 'z' was not found // if the value was not there then it will return a value that is -1

console.log("------------------------------------- lastindexof()----------------------------------------------------------------");
//lastindexof() -> alike indexof() but search from the last backwards
console.log(a.lastIndexOf("b")); // 5

// Now try again, starting from before the last match
console.log(a.lastIndexOf("b", 4)); // the search is start from the index 4 in the backwards (default -1)
console.log(a.lastIndexOf("z")); // -1
console.log("-----------------------------------------forEach()------------------------------------------------------------");
a.forEach((element) => {
  console.log(element);
});
console.log("-----------------------------------------------map()------------------------------------------------------");
//map() - > method returns a new array of the return value from executing callback on every array item.
const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => item.toUpperCase()); // this return a new array by made the change in the array elements
console.log(a2); // ['A', 'B', 'C']

console.log("----------------------------------------------flatMap()-------------------------------------------------------");
//flatMap() ->  method runs map() followed by a flat() of depth 1.
const a3 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a3); // ['A', 'a', 'B', 'b', 'C', 'c']

console.log("---------------------------------------------filter()--------------------------------------------------------");
//fliter() -> method returns a new array containing the items for which callback returned true.
const b = ["a", 10, "b", 20, "c", 30];
const b1 = b.filter((item) => typeof item === "number");
console.log(b1); //[10,20,30]

console.log("----------------------------------------------find()-------------------------------------------------------");
//find() -> method returns the "first item" for which callback returned true.
const find_arr = ["a", 10, "b", 20, "c", 30];
const first_matched_value = find_arr.find((item) => typeof item === "number");
console.log(first_matched_value); // 10

console.log("------------------------------------------------findLast()-----------------------------------------------------");
//findLast() -> method returns the last item for which callback returned true.
const last_arr = ["a", 10, "b", 20, "c", 30];
const last_matched_value = last_arr.findLast((item) => typeof item === "number");
console.log(last_matched_value); // 30
console.log("--------------------------------------------------findLastIndex()---------------------------------------------------");
//return the index of the last matched value

console.log("------------------------------------------every()-----------------------------------------------------------");
//every() -> method returns true if callback returns true for every item in the array.
function isNumber(value) {
  return typeof value === "number";
}
const first_arr = [1, 2, 3];
console.log(first_arr.every(isNumber)); // true
const second_arr = [1, "2", 3];
console.log(second_arr.every(isNumber)); // false

console.log("--------------------------------------------some()---------------------------------------------------------");
//some() -> method returns true if callback returns true for at least one item in the array.
//opposite of every()
function isNumber_check(value) {
    console.log(1);
  return typeof value === "number";
}
const arr_1 = [1, 2, 3];
console.log(arr_1.some(isNumber_check)); // true  as soon as it finds it's exexution is stopped
const arr_2 = [1, "2", 3];
console.log(arr_2.some(isNumber_check)); // true
const arr_3 = ["1", "2", "3"];
console.log(arr_3.some(isNumber_check)); // false

console.log("----------------------------------------reduce()-------------------------------------------------------------");
//reduce() -> method applies callback(accumulator, currentValue, currentIndex, array) for each value
//  in the array for the purpose of reducing the list of items down to a single value. 
// The reduce function returns the final value returned by callback function.

// If initialValue is not specified, then callback's first two parameter values will be the first and second elements of the array.

//On every subsequent call, the first parameter's value will be whatever callback returned on the previous call, 
// and the second parameter's value will be the next value in the array.

const reduce_arr = [10, 20, 30];
const total = reduce_arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(total); // 60

// reduceRight() works like reduce() but starts from the last element 


console.log("-----------------------------------ARRAY TRANSFORMATION------------------------------------------------------------------");
console.log("------------------------------------------Grouping the elements of an array-----------------------------------------------------------");

//Object.groupBy() -> method can be used to group the elements of an array ,
// using test funciton that returns  a string indicating the group of the current element.
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "bananas", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
  { name: "fish", type: "meat" },
];

const result = Object.groupBy(inventory, ({ type }) => type);
console.log(result);

console.log("--------------------------------------Sparse array---------------------------------------------------------------");
// Arrays can contain "empty slots", which are not the same as slots filled with the value undefined.
//  Empty slots can be created in one of the following ways:

//sparse array is nothing but which the space is there but is not filled with undefined 
//but if accessed the element using index then it will show undefined   


console.log("------------------static------------------------isArray()-----------------------------------------------------------");

//array static methods should come after only Array
console.log(Array.isArray(arr_1));

console.log("---------------------------------------------of()--------------------------------------------------------");
//to add values in the array
console.log(Array.of("foo", 2, "bar", true));

console.log("---------------------------------------------copyWithin()--------------------------------------------------------");
// copyWithin(target, start)
//copyWithin(target, start, end)
const array = ["a", "b", "c", "d", "e"];

// Copy to index 0 the element at index 3
console.log(array.copyWithin(0, 3, 4));
// Expected output: Array ["d", "b", "c", "d", "e"]

// Copy to index 1 all elements from index 3 to the end
console.log(array.copyWithin(1, 3));
// Expected output: Array ["d", "d", "e", "d", "e"]

// remaining methods 
/*
    entries()
    fill()  -> fill the values in those indexes
        fill(value)
        fill(value, start)
        fill(value, start, end)
    findLast() 
    findLastIndex()
    includes() -> is that value in the array or not
        includes(searchElement)
        includes(searchElement, fromIndex)

    keys() -> return the index of all the elements
    toLocaleString()
    toSorted()
    toSpliced()
    toString()
    values()
    with()  -> return a new array doesn't alter the existing array
        arrayInstance.with(index, value)
        const arr = [1, 2, 3, 4, 5];
        console.log(arr.with(2, 6)); // [1, 2, 6, 4, 5]
        console.log(arr); // [1, 2, 3, 4, 5]


    instance properties 
        length
        name
        prototype
*/


