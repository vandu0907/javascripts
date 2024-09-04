let math = [];
let sci = [];
let phy = [];
let total = [];
let percentage = [];
let grade = [];

const prompt = require("prompt-sync")();

for(i=0;i<5;i++)
{

    math.push(parseInt(prompt(" enter math : ")))
    sci.push(parseInt(prompt(" enter sci : ")))
    phy.push(parseInt(prompt(" enter phy : ")))

    total.push(math[i] + sci[i] + phy[i])
    percentage.push(total[i]*100/300)

    if(percentage[i]>75)
    {
        grade[i]='a';
    }
    else if(percentage[i]>60 && percentage[i]<75)
    {
        grade[i]='b';
    }
    else if(percentage[i]>45 && percentage[i]<60)
    {
        grade[i]='c';
    }
    else if(percentage[i]>35 && percentage[i]<45)
    {
        grade[i]='d';
    }
    else
    {
        grade[i]='f';
    }
}
console.log("math : ",math)
console.log("sci : ",sci)
console.log("phy : ",phy)
console.log("total : ",total)
console.log("percentage : ",percentage)
console.log("grade : ",grade)
