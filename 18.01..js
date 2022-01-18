niz = [58, "", "abvvcd", true, null, false, 0];
niz1 = []
for (let i = 0; i< niz.length; i++) 
    {
        if(Boolean(niz[i]))
        {
            niz1.push(niz[i])
        }
    }

console.log(niz1)