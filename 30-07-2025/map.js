const myMap = new Map();
myMap.set(1,"boobathi").set(2,"govardan").set(3,"guhan");
console.log(myMap);

console.log(myMap.get(3));

console.log(myMap.has(2));
console.log(myMap.has(5));

console.log(myMap.delete(3));
console.log(myMap);

const newMap = new Map([
    [1,"guhan"],
    [2,"boobathi"],
    [3,"guru"]
])

console.log(newMap);

console.log(newMap.size);

newMap.forEach((value,key)=>   //the first parameter is value and the second parameter is a key 
{
    console.log(`${key} is mention this ${value}`);
})

for(let [key,value] of newMap.entries())
{
    console.log(`${key} is mention this ${value}`);
}

