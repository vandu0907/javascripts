function student_result()
{
    console.log("Click add...");
    let val1 = parseInt(document.getElementById("eng").value)
    let val2 = parseInt(document.getElementById("sci").value)
    let val3 = parseInt(document.getElementById("math").value)
    let total = val1+val2+val3;
    let percentage = total/3;
    let grade;

    document.getElementById("tot").value = total;
    document.getElementById("percent").value = percentage;


    if(percentage>75)
    {
        grade='A';
    }
    else if(percentage>60 && percentage<75)
    {
        grade='B';
    }
    else if(percentage>45 && percentage<60)
    {
        grade='C';
    }
    else if(percentage>35 && percentage<45)
    {
        grade='D';
    }
    else
    {
        grade='Fail';
    }

    document.getElementById("grad").value = grade;
    console.log(total)
    console.log(percentage)
    console.log(grade)

}

