var niz=[2,3,4,5,6,7,8,9,10,11]
suma=0;
for(var i=0;i<niz.length;i++)
{
    if(niz[i]%2==0)
    {
        suma+=niz[i];
    }
}
console.log("Suma parnih brojeva je: " +suma);