var i = 0;
var zbir = 0;
while(i<=1000)
{
    if(i%3===0 && i%5===0)
    {
        zbir+=i;
    }
    i++;
}
console.log(zbir);