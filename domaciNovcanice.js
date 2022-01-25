function deli(iznos, novcanica){
   
        brojNovcanica = Math.floor(iznos / novcanica);
    
    return brojNovcanica;
}
function broji(suma, novcanice)
{
    for (let i = 0; i < novcanice.length; i++) {
        if(suma!=0){
            pom = parseInt(novcanice[i])
            var brNovcanica = deli(suma, pom);
            console.log(brNovcanica + " novcanica od " + pom + " dinara");
            var noviIznos = suma - (pom * brNovcanica)
        } 
        suma=noviIznos;
    }
}
broji(123, [20, 10, 5, 2, 1]);
