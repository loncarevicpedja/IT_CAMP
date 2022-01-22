niz = [58, "a", "b", 5, "c", 3, 0];
niz1 = []
for (let i = 0; i< niz.length; i++) 
    {
        if(typeof sniz[i]==="number")
        {
            niz1.unshift(niz[i])
        }
        else
        {
            niz1.push(niz[i])
        }
    }

console.log(niz1)
// niz = [58, "", "abvvcd", true, null, false, 0];
// niz1 = []
// for (let i = 0; i< niz.length; i++) 
//     {
//         if(Boolean(niz[i]))
//         {
//             niz1.push(niz[i])
//         }
//     }

// console.log(niz1)