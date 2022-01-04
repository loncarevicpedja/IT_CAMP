// a=parseInt(prompt("Unesite dimenzije prve stranice:"));
// b=parseInt(prompt("Unesite dimenzije druge stranice:"));
// c=parseInt(prompt("Unesite dimenzije trece stranice:"));
// if(a+b<c && (a!==0 || b!==0|| c!==0)){
//     alert("Nije moguce je napreaviti trougao od ovih stranice");
// }
// else{
//     alert("Moguce je napreaviti trougao od ovih stranice");

// // }
// a=parseInt(prompt("Unesite broj meseca:"));
// switch(a)
// {
//     case 1:
//         alert("Mesec za koji ste uneli redni broj je JANUAR!");
//         break;
//     case 2:
//         alert("Mesec za koji ste uneli redni broj je FEBRUAR!");
//         break;
//     case 3:
//         alert("Mesec za koji ste uneli redni broj je MART!");
//         break;
//     case 4:
//         alert("Mesec za koji ste uneli redni broj je APRIL!");
//         break;
//     case 5:
//         alert("Mesec za koji ste uneli redni broj je MAJ!");
//         break;
//     case 6:
//         alert("Mesec za koji ste uneli redni broj je JUN!");
//         break;
//     case 7:
//         alert("Mesec za koji ste uneli redni broj je JUL!");
//         break;
//     case 8:
//         alert("Mesec za koji ste uneli redni broj je AVGUST!");
//         break;
//     case 9:
//         alert("Mesec za koji ste uneli redni broj je SEPTEMBAR!");
//         break;
//     case 10:
//         alert("Mesec za koji ste uneli redni broj je OKTOBAR!");
//         break;
//     case 11:
//         alert("Mesec za koji ste uneli redni broj je NOVEMBAR!");
//         break;
//     case 12:
//         alert("Mesec za koji ste uneli redni broj je DECEMBAR!");
//         break;
//         default:
//             alert("Pokusajte ponovo!");
// }
a=parseInt(prompt("Unesite dimenzije prve stranice:"));
switch(true)
{
    case 0<a&& a<30:
        alert("broj je lower");
        break;
    case 31<a&& a<70:
        alert("broj je medium");
        break;
    case 71<a && a<100:
        alert("broj je high");
        break;
        default:
        alert("NISTA");
}