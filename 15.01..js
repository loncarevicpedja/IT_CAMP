niz1 = [1, 2, 3];
niz2 = [2, 30, 1];
pom = [...niz2];
for(let i=0;i<niz1.length;i++)
{
    if(!pom.includes(niz1[i]))
    {
        pom.push(niz1[i])
    }
}
console.log(pom)