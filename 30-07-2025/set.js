const set = new Set();
set.add(10).add(20).add(30).add(50);
console.log(set);
console.log(set.has(10));
console.log(set.size);
console.log(set.delete(10));
console.log(set.clear());  //return undefined