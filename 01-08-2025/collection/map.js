const inventory = new Map();
inventory.set("Pen", 20).set("Notebook", 10).set("Pencil", 50);


inventory.forEach((value,key)=>console.log(key+" "+value));

console.log(inventory.set("Notebook",15));

inventory.delete("Pencil");

console.log(inventory);