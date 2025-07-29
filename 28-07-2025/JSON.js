const person = {"name":"boobathi",
    "Age":22,
    "degree":"B.E"
}

console.log(person);

let json_string = JSON.stringify(person);
console.log(json_string); //used to convert the js object into JSON string format

let js_object = JSON.parse(json_string);
console.log(js_object);


