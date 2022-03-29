brojac = 0
niz = [1, 2, 3, 4, 5, 3, 3, 4, 4, 6, 7, 8, 1, 2]
pom = niz.filter((el, ind, niz) => niz.indexOf(el) === ind)
for (let i = 0; i < pom.length; i++) {
    for (let j = 0; j < niz.length; j++) {
        if(pom[i] === niz[j])
        {
            brojac++
        }
    }
    pom[i].push(brojac)
}
console.log(pom)