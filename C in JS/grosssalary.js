// Grosssalary

var basic= 6000

if(basic<=5000)
{
	hra=(basic*8)/100;
	da=(basic*20)/100;
	grossalary=basic+hra+da;
}
else if(basic>5000 && basic<10000)
{
	hra=(basic*12)/100;
	da=(basic*30)/100;
	grossalary=basic+hra+da;
}
else if(basic>10000 && basic<15000)
{
	hra=(basic*15)/100;
	da=(basic*40)/100;
	grossalary=basic+hra+da;
}
else if(basic>15000)
{
	hra=(basic*20)/100;
	da=(basic*50)/100;
	grossalary=basic+hra+da;
}

console.log("Total Salary : ",grossalary)
