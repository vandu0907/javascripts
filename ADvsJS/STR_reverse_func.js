//--------------- Example 1 ---------------
// program to reverse a string

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--)
//     {
//         newString += str[i];
//     }
//     return newString;
// }

// take input from the user
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


//--------------- Example 2 ---------------
function reverseString(str)
{

    let arrayStrings = str.split("");
    let reverseArray = arrayStrings.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}
let prompt = require("prompt-sync")();

let string = prompt('Enter a string: ');

let result = reverseString(string);
console.log(result);


//--------------- Example 3 ---------------
// let text = "How are you doing today?";
// let myArray = text.split(" ");

// document.getElementById("demo").innerHTML = myArray[2,3];


//--------------- Split Method -----------------
// let prompt = require("prompt-sync")();
// let str = prompt('Enter a string: ');
// let result = str.split(' ');
// console.log(result[4]);
//----------------------------------------------

//--------------- Join Method ------------------
// let str = ['I','am','a','IT','student'];

// console.log(str.join())
// console.log(str.join(''))
// console.log(str.join('-'))
//----------------------------------------------
