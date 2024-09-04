function sorting()
{
    let arraysort = string.split('').sort().join('');

    return arraysort;
}

let prompt = require("prompt-sync")();

let string = prompt('Enter a string: ');

let result = sorting(string);
console.log(result);