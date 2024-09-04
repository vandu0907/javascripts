function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    }
  }
  return result;
}


let prompt = require("prompt-sync")();
let string = prompt('Enter a string: ');

let result = find_longest_word(string);
console.log(result);