//----------------------------------------------------------------
//wpnr
// function dosum(maths,science,english)
// {

//     let total = maths+science+english;
//     console.log("Total :",total)
//     domul (total)
// }
// function domul(total)
// {
//     let percentage = total*100/300;
//     dograd(percentage)
// }
// function  dograd(percentage)
// {
//     let per;
//     // let grade;
//     if(percentage>75)
//     {
//         grade='a';
//     }
//     else if(percentage>60 && percentage<75)
//     {
//         grade='b';
//     }
//     else if(percentage>45 && percentage<60)
//     {
//         grade='c';
//     }
//     else if(percentage>35 && percentage<45)
//     {
//         grade='d';
//     }
//     else
//     {
//         grade='f';
//     }
//     console.log("Percentage :",percentage)
//     console.log("Grade : ",grade)
// }

// dosum(98,24,67)


//----------------------------------------------------------------

// NPNR
function getdata()
{
    const prompt = require("prompt-sync")();
    let maths= parseInt(prompt("enter maths : "));
    let science= parseInt(prompt("enter science : "));
    let english= parseInt(prompt("enter english : "));
    let grade;


    let total = maths+science+english;
    let percentage = total*100/300;
    console.log("total : ",total)
    console.log("percentage : ",percentage)

    doper(total)
}
function doper(total)
{
    let percentage = total*100/300;
    dograd(percentage)
}
function dograd(percentage)
{
    if(percentage>75)
    {
        grade='a';
    }
    else if(percentage>60 && percentage<75)
    {
        grade='b';
    }
    else if(percentage>45 && percentage<60)
    {
        grade='c';
    }
    else if(percentage>35 && percentage<45)
    {
        grade='d';
    }
    else
    {
        grade='f';
    }
    console.log("grade : ",grade)
}
getdata ()

//----------------------------------------------------------------
// // WPWR
// function dosum(maths,science,english)
// {
//     let total = maths+science+english;
//     percentage = total/3
//     let grade;
//     if (percentage>=70)
//     {
//         grade = 'A';
//     }
//     else if(percentage<=69 && percentage>=60)
//     {
//         grade = 'B';
//     }
//     else if(percentage<=59 && percentage >=50)
//     {
//         grade = 'C';
//     }
//     else  if(percentage<=49 && percentage>=40)
//     {
//         grade = 'D';
//     }
//     else
//     {
//         console.log("fail");
//     }
//     console.log("Total :", total)
//     console.log("Percentage :", percentage)
//     console.log("Grade :", grade)

// }
// let maths = 85;
// let science = 80;
// let english = 80;
// dosum(maths,science,english)


//----------------------------------------------------------------

//NPWR
// function dosum()
// {
//     let maths = 80;
//     let science = 80;
//     let english = 80;
//     let grade;

//     let total = maths+science+english;
//     let percentage = total*100/300;
//     return total = maths+science+english;
//     return percentage = total*100/300;

//     if(percentage>75)
//     {
//         grade='a';
//     }
//     else if(percentage>60 && percentage<75)
//     {
//         grade='b';
//     }
//     else if(percentage>45 && percentage<60)
//     {
//         grade='c';
//     }
//     else if(percentage>35 && percentage<45)
//     {
//         grade='d';
//     }
//     else
//     {
//         grade='f';
//     }
// }
// console.log(dosum())
//----------------------------------------------------------------
