//Convert the following object to JSON and then parse it back to an object.
const student = { name: "Tom", age: 21 };

let json_string = JSON.stringify(student);
console.log(typeof json_string);  //string
console.log(json_string); //{"name":"Tom","age":21}

let student_obj = JSON.parse(json_string);
console.log(typeof student_obj);  //object
console.log(student_obj.name + " : "+ student_obj.age); //Tom : 21