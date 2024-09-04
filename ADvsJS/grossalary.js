let basic = [];
let hra = [];
let da = [];
let grossalary = [];

const prompt = require("prompt-sync")();

for(i=0;i<5;i++)
{
    basic.push(parseInt(prompt(" enter basic : ")))

    if(basic[i]<=5000)
	{
		hra[i]=(basic[i]*8)/100;
		da[i]=(basic[i]*20)/100;
	}
	else if(basic[i]>5000 && basic[i]<10000)
	{
		hra[i]=(basic[i]*12)/100;
		da[i]=(basic[i]*30)/100;
	}
	else if(basic[i]>10000 && basic[i]<15000)
	{
		hra[i]=(basic[i]*15)/100;
		da[i]=(basic[i]*40)/100;
	}
	else if(basic[i]>15000)
	{
		hra[i]=(basic[i]*20)/100;
		da[i]=(basic[i]*50)/100;
	}
	grossalary[i]=basic[i]+hra[i]+da[i];

}
console.log("basic : ",basic)
console.log("groassalary : ",grossalary)
