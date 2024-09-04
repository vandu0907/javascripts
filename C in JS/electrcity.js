//Electricity

var unit=100
var total=0

if(unit<=100)
{
    total=unit*0.6+50
}
else if(unit>100 && unit<=300)
{
    total=unit*0.6+(unit-100)*0.8+50
}
else if(unit>300)
{
    total=unit*0.6+200*0.8+(unit-300)*0.9+50
}
if(unit>300)
{
    total=total*1.15
}
console.log(" Bill : ",total)