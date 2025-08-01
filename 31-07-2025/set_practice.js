const numbers = new Set([1, 2, 3, 4, 5,20,19]);
console.log(numbers);
// numbers.clear();
// console.log(numbers);
console.log(numbers.delete(3));
console.log(numbers);
console.log(numbers.entries()); //both key and value are same not different like array and map 
console.log(numbers.keys());
console.log(numbers.values());
numbers.forEach(value => console.log(value));
console.log(numbers.has(20)); //return ture or false 



const mySet = new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
mySet.add(20,30);//if me mention more than one value then the first value only considered 
mySet.add("apple");
mySet.add(16);
// console.log(mySet);

console.log(numbers);
console.log(mySet);
// between two sets 
console.log(numbers.difference(mySet)); //return the unique value from the both of the set (values that present in only one set)
console.log(numbers.intersection(mySet)); //common values in both set
console.log(numbers.symmetricDifference(mySet)) //except common values from both set
console.log(numbers.union(mySet));
console.log(numbers.size);

console.log(numbers.isSubsetOf(mySet)); // return true or false
console.log(numbers.isSubsetOf(mySet)); // return true or false
console.log(numbers.isSupersetOf(mySet)); // return true or false


console.log(numbers.isDisjoinFrom(mySet)); 

// const fruits = new Set(["apple", "banana", "cherry", "apple"]);
// const bools = new Set([true, false, true]);
// const mixed = new Set([1, "one", true, null, undefined]);
