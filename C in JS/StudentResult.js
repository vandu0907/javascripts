//Student Result

var math=10
var sci=20
var phy=12
var che=32

total=math+sci+phy+che
per=total/4

if(per>75)
{
    grade='a';
}
else if(per>60 && per<75)
{
    grade='b';
}
else if(per>45 && per<60)
{
    grade='c';
}
else if(per>35 && per<45)
{
    grade='d';
}
else
{
    grade='f';
}

console.log("Total :",total)
console.log("Per :",per)
console.log("Grade : ",grade)