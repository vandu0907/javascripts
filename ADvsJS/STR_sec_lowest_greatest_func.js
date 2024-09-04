function second_greatest_lowest(arr)
{
    arr.sort(function(a,b)
    {
        return a-b;
    });

    let second_lowest = arr[1];

    let reversearr = arr.reverse();
    let second_greatest = reversearr[1];

    return [second_lowest , second_greatest];
}
console.log(second_greatest_lowest([1,2,3,4,5,6,7,8,9,10]));