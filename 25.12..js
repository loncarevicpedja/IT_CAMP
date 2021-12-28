dd = prompt("Unesite danasnji datum:");
dm = prompt("Unesite danasnji datum:");
dg = prompt("Unesite danasnji datum:");
rd = prompt("Unesite datum rodjenja:");
rm = prompt("Unesite datum rodjenja:");
rg = prompt("Unesite datum rodjenja:");
dd=(dm*30)+(dg*365);

rd=(rm*30)+(rg*365);
var ukupnoDana=dd-rd;
var brojGodina=Math.floor(ukupnoDana/365);
var brojMeseci=(ukupnoDana%365)/30;
var brojDana= (ukupnoDana%365)%30;
console.log("Imas:", brojGodina, "godina, ", brojMeseci, "meseca i ", brojDana," dana");