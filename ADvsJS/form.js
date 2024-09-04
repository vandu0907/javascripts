function myfunc1()
{
   document.getElementById("reg").value = " ";
   document.getElementById("stu").value = " ";
   document.getElementById("bat").value = " ";
   document.getElementById("dep").value = " ";
   document.getElementById("add").value = " ";
}

function myfunc2()
{
    // console.log("Click....")
    let val1 = document.getElementById("reg").value
    console.log(parseInt(val1))
    let val2 = document.getElementById("stu").value
    console.log(val2)
    let val3 = document.getElementById("bat").value
    console.log(parseInt(val3))
    let val4 = document.getElementById("dep").value
    console.log(val4)
    let val5 = document.getElementById("add").value
    console.log(val5)
    // document.getElementById("myfunc2").innerHTML = (val1,val2,val3,val4,val5);
}

 