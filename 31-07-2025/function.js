// iterating over arrays using functions 
// reduce 
const arr = [1,2,3,4,5,6];

arr.reduce((acc,curr,curr_index,arr)=>
{
console.log(`previous value : ${acc} \n Current value : ${curr}\ncurrent index : ${curr_index}\nwhole array : ${arr}\n`);
return acc; // here we don't change accumulator so it will always have 0 in the acc  because in the first iteration the initial value is 0
},0);

// %%% also we must mention return  or get the value from the reduce otherwise the acc will be considered as undefined by the Javascipt

//if we don't mention the intial value the first value is taken as a initial value 
//the reduce function will return only one value at the end of the execution 


// arugments object within the fucntion 
const animals = ["lion","tiger","cheeta","jirafee","elephant"];

function  myFunc(values)
{
    for(let value of values)
    {
        console.log(value);
    }
}

myFunc(animals);

