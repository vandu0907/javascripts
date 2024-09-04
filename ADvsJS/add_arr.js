let arr1 = [];
let arr2 = [];
let sum = [];

const prompt = require("prompt-sync")();

console.log("--------------- arr1 ---------------")
// --------------------arr1----------------------------------
for(i=0;i<5;i++)
{
    arr1.push(parseInt(prompt(" enter value 1 : ")))
}
console.log(arr1)

console.log("--------------- arr2 ---------------")
// --------------------arr2----------------------------------
for(i=0;i<5;i++)
{
    arr2.push(parseInt(prompt(" enter value 2 : ")))
}
console.log(arr2)

console.log("--------------- Total ---------------")
// ------------------------------------Total------------------------------------
// console.log(arr1)
// console.log(arr2)

for(i=0;i<5;i++)
{
    sum.push(arr1[i] + arr2[i])
}
console.log(sum)