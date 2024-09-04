function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];

  for(let x = 0; x < array1.length; x++)
  {
    newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}

let prompt = require("prompt-sync")();
let string = prompt('Enter a string: ');

let result = uppercase(string);
console.log(result);
