// function pozdrav(ime){
//     console.log("Zdravo, " + ime + "!");
// }
// var imeKorisnika = prompt("Unesite Vas ime:");
// pozdrav(imeKorisnika);

// ////////////////////////////////////////////////////////////////
// function bmi(visina, tezina)
// {
//     valueBmi = tezina / visina**2
//     if(valueBmi <= 18.5)
//     {
//         return console.log("ISPOD");
//     }
//     else if(valueBmi <= 30 && valueBmi > 18.5)
//     {
//         return console.log("NORMAL");
//     }
//     else if(valueBmi > 30)
//     {
//         return console.log("PREKO");
//     }
//     else{
//         return console.log("NEISPRAVAN UNOS");
//     }
// }
// bmi(1.9,96)
// ////////////////////////////////////////////////////////////////

function booleann(bool){
    if(bool === true)
    return "yes";
    else
    return "no";
}
booleann(false)