// --------------------------------- 14-03-2024 ---------------------------------

// console.log(1 + 2) //3
// console.log(10 + 20) //30
// console.log(10.0 + 20.0) //30
// console.log(10.5 + 20.5) //31
// console.log(0.1 + 0.3) //0.4
// console.log(0.7 + 0.3) //1
// console.log(22/7) //3.142857142857143

// +
// '10' -> String
// console.log(10 + '10') //1010
// console.log(+10 + +'20') //30
// console.log(+10 +'H' +'20') //10H20
// console.log(10 + 'H') //10H   //NAN -> Not a Number


// --------------- Datatype ---------------
// console.log(typeof (10)) //Number
// console.log(typeof ('10')) //String
// console.log(typeof true) //Boolean
// console.log(typeof false) //Boolean
// console.log(typeof 0.3) //Number

// console.log(typeof Nan) //Undefined INQ(Interview Question)
// console.log(typeof null) //Object INQ(Interview Question)
// console.log(typeof undefined) //Undefined INQ(Interview Question)

// console.log(typeof []) //Object (array is in form of object) INQ(Interview Question)
// console.log(typeof {}) //Object INQ(Interview Question)
// console.log(typeof function () {}) //Function INQ(Interview Question)

// console.log(typeof 1000n) //Bigint INQ(Interview Question)
// console.log(typeof Symbol('h')) //Symbol
// console.log(Symbol('h')) //Symbol(h)
// console.log(Symbol) //[Function : Symbol]

// ----------------------------------------

// ------------------------------------------------------------------------------


// --------------------------------- 18-03-2024 ---------------------------------

// == Equality Value
// === Equality Value + Datatpye

// console.log(10 == 10) //true
// console.log(10 == '10') //true
// console.log(10 === '10') //false
// console.log(10 == 'ten') //false

// console.log(0.1 + 0.3 == 0.4) //true
// console.log(true == 1) //true
// console.log(true == '1') //true
// console.log(true === '1') //false

// console.log(10 + '10') //1010
// console.log(10 + '10' == 10) //false
// console.log(10 * '10' == 100) //true
// console.log(10 / '10' == 1) //true
// console.log(10 - '10' == 0) //true
// console.log(10 / '10' == 1) //true
// console.log(10 / '10' === 1) //true
// console.log(10 / '10' == '1') //true
// console.log(10 / '10' === '1') //false


// --------------- Relational Operator ---------------

// console.log(1>2) //false
// console.log(2>3) //false
// console.log(1>2>3) //false
// console.log(1<2<3) //true
// console.log(2<3) //true

// console.log(3>2>1) //false
// console.log(3>2) //true
// console.log(2>1) //true

// console.log(3<2<1) //true
// console.log(3<2) //false
// console.log(2<1) //false

// console.log(true == 1) //true
// console.log(true == '1') //true
// console.log(true === '1') //false
// console.log(true === 1) //false

// ----------------------------------------

// ------------------------------------------------------------------------------


// --------------------------------- 19-03-2024 ---------------------------------

// let & var
// Kywords
// Declare Variable

// let intro in ES6 (Ecma Script 6)

// var a = 10;
// console.log(a); //10

// a = 10
// console.log(a); //10
// var a;

// console.log(a); //undefined
// var a;

// console.log(a); //Cannot access 'a' before initialization
// let a;

// console.log(b); //b is not defined
// let a;


// let a = 10;
// let a = 20;
// console.log(a); //Identifier 'a' has already been declared

// var a = 10;
// var a = 20;
// console.log(a); //last value declare in var 
// ans -> 20

// var a = 10;
// {
//     var a = 20;
// }
// console.log(a); //ans-> 20
// var ma under ni value print thay che

// let a = 10;
// { // a is local to scope
//     let a = 20;
//     a*=2;
//     console.log(a); //40
// }
// console.log(a); //10
// inside value print then outside value print

// var a = 10;
// { // a is local to scope
//     var a = 20;
//     a*=2;
//     console.log(a); //40
// }
// console.log(a);  //40
// Var inside value print and both value same ans inside or outside

// var a = 10;
// {
//     var a = 20;
//     a*=2;
//     {
//         a+=2
//         console.log(a); //42
//     }
//     console.log(a); //42
// }
// console.log(a); //42

// let a = 10;
// {
//     let a = 20;
//     a*=2;
//     {
//         a+=2
//         console.log(a); //42
//     }
//     console.log(a); //42
// }
// console.log(a); //10

// ------------------------------------------------------------------------------


// --------------------------------- 21-03-2024 ---------------------------------

// -> Function
// -> Named Function

// M-Imp -> If any number is addes with the number , this NaN
// Null is an object

// =>
// function defination
// function one()
// {
//     console.log("one")
// }
// function calling
// one() 
// ans-> one

// =>
// function one(param1)
// {
//     return param1
// }
// console.log(one("one")) //one

// function one(param1,param2,param3)
// {
//     return param1 + param2 + param3
// }
// console.log(one("one","two","three")) //onetwothree
// console.log(one("one","two","three","four")) //onetwothree
// console.log(one("one","two")) //onetwoundefined
// console.log(one("one","two",undefined)) //onetwoundefined
// console.log(one(null,"two",undefined)) //nulltwoundefined
// console.log(one("one"," ","three")) //one three
// console.log(one(null,NaN,undefined)) //NaN
// console.log(one(10,NaN,12)) //NaN
// console.log(one(10,21,undefined)) //NaN
// console.log(one(10,undefined,21)) //NaN
// console.log(one(10,null,21)) //31
// console.log(one(10,21,null)) //31
// console.log(one('10',null,21)) //10null21
// console.log(one(10,'21',null)) //1021null

// ------------------------------------------------------------------------------


// --------------------------------- 22-03-2024 ---------------------------------

// function one(){
//     return "Hello"
// }
// function two(){
//     return one()
// }
// console.log(two())      // hello



// function one(){
//     return "Hello"
// }
// function two(){
//     return one                // no bracate means now function two become fn one
// }
// console.log(two())          // [Function: one]
// console.log(two()())        // Hello



// function one(){
//     return "Hello"
// }
// function two(){
//     return one()
// }
// function three(){
//     return two
// }
// console.log(three())             //[Function: two]
// console.log(three()())            // hello


// function one(){
//     return "Hello"
// }
// function two(){
//     return one
// }
// function three(){
//     return two
// }
// console.log(three())             //[Function: two]
// console.log(three()())           //[Function: one]
// console.log(three()()())         //Hello

// ------------------------------------------------------------------------------


// --------------------------------- 27-03-2024 Array ---------------------------

// Javascript check the value.
// collection of Element
// index start from 0(zero)
// [] same symbol

// let arr1 = [1,2,'three',4,'5',6,'seven',"8","9",10]
// console.log(arr1) // [1,2,'three',4,'5',6,'seven','8','9',10]

// console.log(arr1[0]) //1 (index)
// console.log(arr1[3]) //4 (index)

// console.log(arr1['0']) //1 (value check)
// console.log(arr1['3']) //4 (value check)

// console.log(arr1[1.5]) //undefined (becoz value is not given in array)

// arr1[1.5] = 1.5 //(value add in arr1) / (key value form)
// console.log(arr1[1.5]) //1.5
// console.log(arr1) //[1,2,'three',4,'5',6,'seven','8','9',10,'1.5':1.5]

// console.log(arr1[name]) //name is not defined
// arr1['name'] = 'nikhil' //(value add in arr1) / (key value form)
// console.log(arr1['name']) //nikhil
// console.log(arr1) //[1,2,'three',4,'5',6,'seven','8','9',10,'1.5':1.5,name: 'nikhil']

// console.log(arr1[-1]) //undefined
// arr1[-1] = -1 //(value add in arr1) / (key value form)
// console.log(arr1.length) //10 (length is a property not a function)
// console.log(typeof (arr1)) //object

// Array Defination -->
// The Array object, as with arrays in other programming languages,enables storing
// a collection of multiple items under a single variable name,and has members for
// performing common array operations.

// Length Defination -->
// The length data property of an Array instance represents the number of elements
// in that array. The value is an unsigned, 32-bit integer that is always numerically
// greater than the highest index in the array.

// ------------------------------------------------------------------------------


// --------------------------------- 28-03-2024 ---------------------------------

// let arr1 = [1,2,3,4,5,6]
// console.log(arr1) //[ 1, 2, 3, 4, 5, 6 ]
// arr1[10] = 11
// console.log(arr1[7])
// arr1[7] = undefined 
// console.log(arr1[8] == undefined) //true
// console.log(arr1[8] === undefined) //true

// arr1[7] = null
// console.log(arr1) //[ 1, 2, 3, 4, 5, 6, <1 empty item>, null ]

// undefined , null , NaN

// console.log(undefined == undefined) //true
// console.log(undefined === undefined) //true

// console.log(null == null) //true
// console.log(null === null) //true

// console.log(NaN == NaN) //false
// console.log(NaN === NaN) //false

// console.log(undefined == null) //true
// console.log(undefined === null) //false

// console.log(undefined == NaN) //false
// console.log(undefined === NaN) //false

// console.log(null == NaN) //false
// console.log(null === NaN) //false

// ------------------------------------------------------------------------------


// -------------------- 30-03-2024 Push,Pop,Shift,Unshift -----------------------

// let arr1 = [10,20,30,40]

// Push :- Value insert last

// => Define :- Push
// -> The push() method of Array instances adds the specified elements to the end of an 
// array and returns the new length of the array.

// => Syntax :- 
// push()
// push(element1)
// push(element1, element2)
// push(element1, element2, /* …, */ elementN)

// => Parameter :-
// element1, …, elementN
// The element(s) to add to the end of the array.

// => Return Value :-
// The new length property of the object upon which the method was called.

// arr1.push(50)
// console.log(arr1) //[ 10, 20, 30, 40, 50 ]

// console.log(arr1.push(60)) //5
// console.log(arr1) //[ 10, 20, 30, 40, 60 ]

// console.log(arr1.push(60,70,80)) //7
// console.log(arr1) //[10,20,30,40,60,70,80]

// -------------------

// Pop :- Value delete last

// => Define :- Pop
// -> The pop() method of Array instances removes the last element from an 
// array and returns that element. This method changes the length of the array.

// => Syntax :-
// pop()

// => Return Value :-
// The removed element from the array; undefined if the array is empty.

// console.log(arr1.pop()) //40
// console.log(arr1) //[10,20,30]

// -------------------

// Shift :- Value delete first

// => Define :- Shift
// -> The shift() method of Array instances removes the first element from an 
// array and returns that removed element. This method changes the length of the array.

// => Syntax :-
// shift()

// => Return Value :-
// The removed element from the array; undefined if the array is empty.

// console.log(arr1.shift()) //10
// console.log(arr1) //[20,30,40]

// --------------------

// Unshift :- Value insert first

// => Define :- Unshift
// -> The unshift() method of Array instances adds the specified 
// elements to the beginning of an array and returns the new length of the array.

// => Syntax :-
// unshift()
// unshift(element1)
// unshift(element1, element2)
// unshift(element1, element2, /* …, */ elementN)

// => Parameter :-
// element1, …, elementN
// The elements to add to the front of the arr.

// => Return Value :-
// The new length property of the object upon which the method was called.

// console.log(arr1.unshift(9)) //5
// console.log(arr1) //[9,10,20,30,40]

// console.log(arr1.unshift(7,8,9)) //7
// console.log(arr1) //[7,8,9,10,20,30,40]


// --------------- Splice ---------------

// => Define :- Splice
// ->The splice() method of Array instances changes the contents of an array by 
// removing or replacing existing elements and/or adding new elements in place.

// => Syntax :-
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)

// => Parameter :-
// start
// Zero-based index at which to start changing the array, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// If start < -array.length, 0 is used.
// If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
// If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.
// deleteCount Optional
// An integer indicating the number of elements in the array to remove from start.

// If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

// If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

// item1, …, itemN Optional
// The elements to add to the array, beginning from start.

// If you do not specify any elements, splice() will only remove elements from the array.

// => Return Value :-
// -> An array containing the deleted elements.
// -> If only one element is removed, an array of one element is returned.
// ->If no elements are removed, an empty array is returned.

// let arr1 = [10,20,30,40,50,60,70,80,90,100]
//  0   1   2   3   4   5   6   7   8   9
//  10  20  30  40  50  60  70  80  90  100
//  -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

// console.log(arr1.splice(5)) //[ 60, 70, 80, 90, 100 ]
// console.log(arr1.splice(5,2)) //[ 60, 70 ]

// console.log(arr1.splice(5,2,600,700,800))
// console.log(arr1) //[ 10,  20,  30, 40, 50, 600, 700, 800, 80, 90, 100 ]

// console.log(arr1.splice(0)) //[10,20,30,40,50,60,70,80,90,100]
// console.log(arr1.splice(0,1)) //[10]
// console.log(arr1.splice(2,15)) //[30,40,50,60,70,80,90,100]
// console.log(arr1.splice(3,3)) //[40,50,60]

// --------------------------------------

// ------------------------------------------------------------------------------


// --------------------------------- 01-04-2024 ---------------------------------

// --------------- Splice ---------------

// let arr1 = [10,20,30,40,50,60,70,80,90,100]
//  0   1   2   3   4   5   6   7   8   9
//  10  20  30  40  50  60  70  80  90  100
//  -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

// console.log(arr1.splice(-3)) //[80,90,100]
// console.log(arr1.splice(-5,2)) //[60,70]
// console.log(arr1.splice(-1,9)) //[100]
// console.log(arr1.splice(-5,5)) //[60,70,80,90,100]

// console.log(arr1.splice(-5,3,300,200))
// console.log(arr1) //[10,20,30,40,50,300,200,90,100]

// console.log(arr1.splice(-5,3,400,300,200,100))
// console.log(arr1) //[10,20,30,40,50,400,300,200,100,90,100]

// --------------------------------------


// --------------- Slice ---------------

// => Define :- Slice
// -> The slice() method of Array instances returns a shallow copy of a 
// portion of an array into a new array object selected from start to end 
// (end not included) where start and end represent the index of items in 
// that array. The original array will not be modified.

// => Syntax :-
// slice()
// slice(start)
// slice(start, end)

// -> Deep Copy
// -> Shallow Copy

// => Parameter :-
// start Optional
// Zero-based index at which to start extraction, converted to an integer.

// Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
// If start < -array.length or start is omitted, 0 is used.
// If start >= array.length, nothing is extracted.
// end Optional
// Zero-based index at which to end extraction, converted to an integer. slice() extracts up to but not including end.

// Negative index counts back from the end of the array — if -array.length <= end < 0, end + array.length is used.
// If end < -array.length, 0 is used.
// If end >= array.length or end is omitted, array.length is used, causing all elements until the end to be extracted.
// If end implies a position before or at the position that start implies, nothing is extracted.

// => Return Value :-
// A new array containing the extracted elements.

// let arr1 = [10,20,30 ,40,50,60,70,80,90,100]
//  0   1   2   3   4   5   6   7   8   9
//  10  20  30  40  50  60  70  80  90  100
//  -10 -9  -8  -7  -6  -5  -4  -3  -2  -1

// ----- >Deep Copy< -----
// arr_1 = arr1
// arr_1[10]=200
// console.log(arr_1) //[10,20,30,40,50,60,70,80,90,100,200]

// arr1.splice(2,2)
// console.log(arr1) //[10,20,30,50,60,70,80,90,100]

// ----- >Shallow Copy< -----
// arr_1 = arr1.slice()
// arr_1[10]=200
// console.log(arr_1) //[10,20,30,40,50,60,70,80,90,100,200]

// arr1.splice(2,2)
// console.log(arr1) //[10,20,30,50,60,70,80,90,100]
// --------------------------------------

// console.log(arr1.slice(5)) //[ 60, 70, 80, 90, 100 ]
// console.log(arr1.slice(1,6)) //[ 20, 30, 40, 50, 60 ]
// console.log(arr1.slice(-6)) //[ 50, 60, 70, 80, 90, 100 ]
// console.log(arr1.slice(-3,-6)) //[]
// console.log(arr1.slice(-6,9)) //[ 50, 60, 70, 80, 90 ]

// ------------------------------------------------------------------------------


// --------------------------------- 02-04-2024 ---------------------------------

// => Spread Operator
// (... -> Spread Operator) alag alag pade

// let arr1 = [10,20,30,40]
// let arr2 = [10,20,30,40]
// let arr3;

// console.log([...arr1,...arr2]) //[10,20,30,40,10,20,30,40]
// console.log([arr1,arr2]) //[[10,20,30,40],10,20,30,40]

// arr3 = [...arr1,50] //[10,20,30,40,50] , add 50 backside
// arr3 = [50,...arr1] //[50,10,20,30,40] , add 50 frontside
// arr3 = [arr1,...arr2] //[[10,20,30,40],10,20,30,40]
// console.log(arr3)


// let arr1 = [10,20,30,40]
// let arr2 = [60,70,80,90]

// let arr3 = arr1.slice(1,3)
// arr3.push(100)
// console.log(arr3) // [ 20, 30, 100 ]

// let arr3 = [...arr1]
// console.log(arr3) //[ 10, 20, 30, 40 ]

// arr3.push(100)
// console.log(arr1) //[ 10, 20, 30, 40 ]
// console.log(arr3) //[ 10, 20, 30, 40, 100 ]

// ------------------------------------------------------------------------------


// --------------------------------- 03-04-2024 ---------------------------------

// => Functions in JavaScript :-

// 1) Named Function
// 2) Anonymous Function 
// 3) Rest Parameter in Function
// 4) Default Parameter in Function
// 5) Optional Parameter in Function
// 6) Generators Function
// 7) Construction Function
// 8) IIFE (Immediate Invokable Function Expression)

// --------------------

// 2) Anonymous Function :-

// Function Defination
// -> let/var/const Variable-Name = (arg1,arg2,arg3...)=>{
// }

// Function calling
// Variable-Name(param1,param2,param3)

// -> let fun_one = ()=>{
//     return "one";
// }
// console.log(fun_one) //[Function: fun_one]

// only for single statment
// let fun_one = ()=> "Hello,One"
// console.log(fun_one()) //Hello,One

// let fun_one = (arg1) => arg1
// console.log(fun_one("param1,one")) //param1,one

// let dosum = (arg1,arg2) => arg1+arg2
// console.log(dosum(10,20)) //30

// let dosum = (arg1,arg2) =>{
//     console.log(arg1+arg2)
// }
// dosum(100,30) //130

// ------------------------------------------------------------------------------


