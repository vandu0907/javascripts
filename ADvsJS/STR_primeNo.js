function prime(n)
{
    if(n==1)
    {
        return false;
    }
    else if(n==2)
    {
        return true;
    }
    else
    {
        for(let x=2;x<n;x++)
        {
            if(n%x==0)
            {
                return false;
            }
        }
    return true;
    }
}
console.log(prime(13));
console.log(prime(37));
console.log(prime(10));
console.log(prime(98));