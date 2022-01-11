var n = parseInt( prompt("Unesite broj ucenika:"));
var niz = []
var tezina = 0; 
for(let i=0;i<n;i++)
{
    tezina = parseInt( prompt("Unesite tezinu ucenika:"))
    niz.push(tezina);
}
niz.sort()
alert("Najtezi ucenik je:" + niz[niz.length -1])
alert("Najlaksi ucenik je:" + niz[0])
