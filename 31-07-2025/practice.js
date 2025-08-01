/*
const users = [
        { name: "Alice", active: true },
        { name: "Bob", active: false },
        { name: "Carol", active: true }
    ];
 
print the output as array which contains only active is true.
 
try output with below diffrent ways also
array output with names only who are has active true.
output as string which has names instead of array.
*/

const users = [
        { name: "Alice", active: true },
        { name: "Bob", active: false },
        { name: "Carol", active: true }
    ];

    const active_users_2 = users
                           .filter(user => user.active)
                           .map(user=>user.name);
    console.log(active_users_2);

const users_status = Map.groupBy(users,
    (value)=> value.active
);
const active_users = users_status.get(true);
const active_user_Arr = [];

active_users.forEach(element => {
    active_user_Arr.push(element.name);
    console.log(element.name)
});

console.log(active_user_Arr);

// console.log(...active_users.get(true));


/*
const words = ["   apple", "ball   ", "angle", "   bill", "cat", "dog", "eat", "ant"];
 
Question : Find the alphabet letters from given array of words like if 'apple' is present then take a, "ball" is present take b.
after that find tha count which means how many words are there in the given array like a is 3 times b is 2 times.
 
*/

const words = ["   apple", "ball   ", "angle", "   bill", "cat", "dog", "eat", "ant"];
const new_arr = words.map(word=>word.trim().at(0));
// console.log(new_arr);
const final_output = Map.groupBy(new_arr,(value)=>
value);
// console.log(final_output);
final_output.forEach((value,key) => {
    console.log(key + " : "+ value.length );
});

