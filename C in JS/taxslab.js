// Income Tax Slab

var income= 2500

if(income<=2500)
{
    tax=income;
}
else if(income>2500 && income<5000)
{
    tax=income+(income-2500)*0.10;
}
else if(income>5000 && income<=10000)
{
    tax=income+income*0.10+(income-2500)*0.20;
}
else if(income>10000)
{
    tax=income+(income-2500)*0.30;
}
console.log("Total Income : ",tax)
