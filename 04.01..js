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
// function faktorijel(x)
// {
//     var fact=1;
//     for(let i=1;i<=x;i++)
//     {
//         fact*=i;
//     }
//     return fact;
// }
// var n=parseInt(prompt("Unesite neki broj"));
// var suma=0;
// var c;
// for(let i=1;i<=n;i++)
// {
//     c=faktorijel(i);
//     suma+=c;

// }
// console.log(suma);
const number = parseInt(prompt('Unesite neki broj: '));
let n1 = 1, n2 = 1, nextNum;
var suma=0;


for (let i = 1; i <= number; i++) {
    nextNum = n1 + n2;
    n1 = n2;
    n2 = nextNum;
    console.log(nextNum);
}


