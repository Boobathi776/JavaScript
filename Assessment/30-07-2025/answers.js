// 1. c

// 2. true , javascript is a case-sensitive

// 3. diff between let ,var , const
/*
    var
        it works in a function level block. 
        we can redeclare a same variable again and again.
        it won't show any error if it is redeclared again.
        the value of var variable gets changes even it happen in another block whith in the same function block

        ex :
            var x = 10 ;
            {
                x=20;
            }
            console.log(x); // 20 


    let 
        it works only within the block.
        we can't declare more than one let with the same name in same block.
        we can change the value of let variable.
        if the value changed inside another block that doesn't affect the outer block.

        ex: 
            let a = 10;
            {
                let a=20;
                console.log(a);  //20
            }
            console.log(a); //10

    const
        just like let but the values once assigned we can't change it.
        we usally used with arrays and object and collection objects.
        but in collection we can change the elements within the collection.

*/

// 4. diff between null and undefined 
/*
    undefined:
        the variable that is declared and doesn't give value to that variable then that is undefined 
    null:
        the variable we can explicitly give an value null to make the variable empty or null.

    undefined == null :  //true 
    nudefined === null : // false
*/


// 5.  How do you convert a JavaScript object into a JSON string?
//   let json_string = JSON.stringify(instancevariable); //this will return a JSON string


// 6.  d

// 7.  false

// 8 . How do you check if user input is not empty before processing it?
// i will check the length of the string to make sure that the input is not empty.


