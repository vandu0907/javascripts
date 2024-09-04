// // var / let / const
// const prompt = require("prompt-sync")();
// // var str1 = "we are learning javascript"
// // var str2 = " for full stack development"
// // var str3 = " in online mode"

// // console.log(str1,str2,str3) //one by one
// // console.log((str1,str2,str3)) //last
// // console.log(str1+str2+str3) //concate
// // console.log(str2)

// var n = parseInt(prompt("Enter n : "))
// console.log(n);


//---------------------------------------------
// // var / let / const
// not strictly typed
// var a = 10
// {
//     var a = 20
// }
// console.log(a)

// let a = 10
// {
//     let a = 20
// }
// console.log(a)


// global poluting issue----------------------------------
// var a = 10
// {
//     var a = 20
//     {
//         var a = 30
//         {
//             var a = 40
//             {
//                 var a = 50
//                 console.log(a)
//             }
//             console.log(a)
//         }
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)


// let a = 10
// {
//     let a = 20
//     {
//         let a = 30
//         {
//             let a = 40
//             {
//                 let a = 50
//                 console.log(a)
//             }
//             console.log(a)
//         }
//         console.log(a)
//     }
//     console.log(a)
// }
// console.log(a)


// var a=10
// var a=20
// console.log(a)

// let a=10
// let a=20
// console.log(a)

// let a=10
// a=20
// console.log(a)

// Hoisting------------------------------------
// a=10
// a+=10
// console.log(a)

// var a =10
// console.log(a)
// let a
//----------------------------------------------


//Const----------------------------------------
// const a=10
// a=10   // assignment no possible in const
// console.log(a)
//---------------------------------------------


// ---------------------------------------------------
// undefined
// console.log("ten"*2)
// console.log("ten"*2)

// console.log(NaN == NaN)
// console.log(NaN === NaN)

// console.log(null == null)
// console.log(null === null)

// console.log(undefined == undefined)
// console.log(undefined === undefined)

// console.log(NaN == null)
// console.log(NaN === null)

// console.log(NaN == undefined)
// console.log(NaN === undefined)

// console.log(null == undefined)      //value
// console.log(null === undefined)     //

// console.log(NaN === null)
// console.log(typeof(undefined))
// ---------------------------------------------------



// -------------------->  18/10/23  <-------------------------------
// let arr = [10,20,30,40,50]
// console.log(typeof(arr))
// // The length data property of an Array
// console.log(arr.length)  // TypeError: arr.length is not a function
// console.log(arr.length)

// let a;
// let arr = [10,20,30,40,50]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])
// arr[6]=70
// console.log(arr[6])
// arr[20]=300
// console.log(arr)

// console.log(arr[5])
// console.log(arr[5]==undefined)
// console.log(arr[5])

// arr[10]=''
// arr[15]=undefined
// console.log(arr)
// console.log(''==undefined)
// console.log(typeof(''))
// console.log(arr.length)
// ----------------------------------------------------------------



// -------------------->  19/10/23  <-------------------------------
// let arr = []
// console.log(arr.length)
// let arr = [10,20,30,40,50]
// console.log(arr.length)
// arr.length = 1
// console.log(arr.length) //
// console.log(arr)        //

// Insert   ->  push    unshift
// Delete   ->  pop     shift

// push pop

// let arr = [10,20,30,40,50]
// arr.push(100)
// arr.push(200)
// console.log(arr)

// let arr = [10,20,30,40,50]
// arr.push(100,200,300)
// console.log(arr)

// let arr = [10,20,30,40,50]
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// console.log(arr.pop())
// // console.log(arr.pop())
// console.log(arr)


// shif     unshift
// let arr = [10,20,30,40,50]
// console.log(arr.shift())
// console.log(arr)

// let arr = [10,20,30,40,50]
// arr.unshift(100)
// console.log(arr)

// unshift(element1)
// unshift(element1, element2)
// unshift(element1, element2, /* …, */ elementN)


// let arr = [10,20,30,40,50]
// arr.unshift(100,200,300)
// console.log(arr)
// ----------------------------------------------------------------



// -------------------->  20/10/23  <-------------------------------

//Defination -> The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// let arr = [10,20,30,40,50,60,70,80,90,100]
// console.log(arr.length)
// arr.pop()
// arr.pop()
// arr.pop()
// console.log(arr.length)
// console.log(arr)
// console.log(arr.length)
// delete arr[4]
// delete arr[5]
// delete arr[6]
// console.log(arr.length)
// console.log(arr)

//----------> syntax <----------
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// let arr = [10,20,30,40,50,60,70,80,90,100]
//  0   1   2   3   4   5   6   7   8   9
//  10  20  30  40  50  60  70  80  90  100
//  -10 -9  -8  -7  -6  -5  -4  -3  -2  -1
//Direction =  ->

// arr.splice(3)
// arr.splice(0)
// arr.splice(10)

// arr.splice(4,3)
// arr.splice(0,3)
// arr.splice(7,1)
// arr.splice(5,5)
// arr.splice(8,10)
// arr.splice(1,8)
// arr.splice(2,6)

// arr.splice(5,1,500)
// arr.splice(2,4,11,12,13,14,15)

// arr.splice(-5)
// arr.splice(-5,3)
// arr.splice(-7,4)
// arr.splice(-7,-4) // not possible

// console.log("Deleted Element : ",arr.splice(-7,4))
// console.log(arr)

// ----------------------------------------------------------------



// -------------------->  21/10/23  <-------------------------------

//-----> Syntax <-----
// slice()
// slice(start)
// slice(start, end)

// let arr = [10,20,30,40,50,60,70,80,90,100]
//-----> deep copy <-----
// arr_1 = arr
// arr_1[10]=200
// arr.splice(2,2)
// console.log(arr)
// console.log(arr_1)

//-----> shallow copy <-----
// arr_1 = arr.slice()
// arr_1[10]=200
// arr.splice(2,2)
// console.log(arr)
// console.log(arr_1)

//Defination -> The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

// let arr = [10,20,30,40,50,60,70,80,90,100]
// arr_1 = arr.slice(5)
// arr_1 = arr.slice()
// console.log(arr_1)

// arr_1 = arr.slice(2,2)
// arr_1 = arr.slice(0,2)
// arr_1 = arr.slice(6,9)

//  0   1   2   3   4   5   6   7   8   9
//  10  20  30  40  50  60  70  80  90  100
//  -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

// arr_1 = arr.slice(-9,5)
// arr_1 = arr.slice(-5,8)
// arr_1 = arr.slice(-5,2)
// arr_1 = arr.slice(-5,5)

// arr_1 = arr.slice(2,-2)
// arr_1 = arr.slice(5,-9)
// arr_1 = arr.slice(-9)

// arr_1 = arr.slice(-9,-2)
// arr_1 = arr.slice(-5,-8)

// console.log(arr_1)


// ----------------------------------------------------------------



// -------------------->  25/10/23  <-------------------------------



// ----------------------------------------------------------------

//------- at() -------------
// let arr=[10,52,06,34,21]
// let index=-3
// console.log(arr.at(index))
//--------------------------

//------- concat() -------------
// let arr1=['A','B','C','D','E']
// let arr2=[10,20,30,40,50]
// let arr3=['a','b','c','d','e']
// let arr4=[60,70,80,90,100]
// let arr5=arr1.concat(arr2,arr3,arr4)
// console.log(arr5)
//--------------------------

//---------- fill() ------------------
// fll(value)
// fill(value, start)
// fill(value, start, end)

// let arr=[23,34,45,56,78,89,90]
// console.log(arr.fill(6))
// console.log(arr.fill(3,2))
// console.log(arr.fill(10,2,6))
//------------------------------------

//---------- indexof() --------------------
// indexOf(searchElement)
// indexOf(searchElement, fromIndex)

// let arr=['a','b','c','d','e']
// console.log(arr.lastindexof('d'))
//-----------------------------------------

//--------------- tostring() -------------

// let array1 = ['N','I','K','H','I','L',21];
// console.log(array1.toString());
//----------------------------------------



function palindrom(str)
{
    let i,j,k=0;
    let a = [10];
    let b = [10];

    // let prompt = require("prompt-sync")();
    // let str = prompt('Enter a string: ');


    for(i=0;a[i]!='\0';i++);
    j=j-1;
    for(i=j;i>0;i--,j--)
    {
        b[i]=a[k];
    }
    b[k]='\0';

    if(a[j]==b[j])
    {
        console.log("it is palindrom..");
    }
    else
    {
        console.log("it is not palindrom..");
    }
    return palindrom;
}
let prompt = require("prompt-sync")();
let str = prompt('Enter a string: ');

let result = palindrom(str);
console.log(result);