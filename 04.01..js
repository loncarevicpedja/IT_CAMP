// var i=1;
// while(i<=50)
// {

//     if(i%3===0 && i%5===0)
//     {
//         console.log("Fizz Buzz");
//     }
//     else if(i%3===0)
//     {
//         console.log("Fizz");
//     }
//     else if(i%5===0)
//     {
//         console.log("Buzz");
//     }
//     else
//     {
//         console.log(i)
//     }
//     i++;
// }
function faktorijel(x)
{
    var fact=1;
    for(let i=1;i<=x;i++)
    {
        fact*=i;
    }
    return fact;
}
var n=parseInt(prompt("Unesite neki broj"));
var suma=0;
var c;
for(let i=1;i<=n;i++)
{
    c=faktorijel(i);
    suma+=c;

}
console.log(suma);
