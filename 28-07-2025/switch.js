import createPrompt from 'prompt-sync';
 let prompt = createPrompt();
 let day = prompt("Enter a no to do the operation : ");
 switch(Number(day))
 {
    case 1:
        console.log("Hey you pressed a values which is one....");
        break;
    case 2:
        console.log("Now you pressed a value which is two....");
        break;
    case 3:
        console.log("The value that is pressed now is a three");
        break;
    case 4:
        console.log("here you are ,this is the last value that is four....");
        break;
    default:
        console.log("There is no such case in the switch....");
 }
 console.log(day);