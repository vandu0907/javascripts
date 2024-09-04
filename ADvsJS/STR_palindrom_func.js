function palindirm(str)
{
    let arrayStrings = str.split("");
    let reverseArray = arrayStrings.reverse();
    let joinArray = reverseArray.join("");

    if(string == joinArray)
    {
        console.log(" Is palindrom..");
    }
    else
    {
        console.log(" Is  not palindrom..");
    }
    return joinArray;


}
let prompt = require("prompt-sync")();

let string = prompt('Enter a string : ');

let result = palindirm(string);
console.log(result);
