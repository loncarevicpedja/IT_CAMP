// niz = [5,3,2,7,1,0]
// var pom
// for(let i=0;i<niz.length;i++)
// {
//     for(let j=i+1;j<niz.length+1;j++)
//     {
//      if(niz[i] > niz[j])
//      {
//          pom = niz[i];
//          niz[i] = niz[j]
//          niz[j] = pom
//      }   
//     }
// }
// console.log(niz);

function toBin(a, b){
    var c = a + b;
    var pom = []
    while(c>0)
    {
        if(c % 2 == 0)
        {
            
            pom.push(0)
        }
        else{
            pom.push(1)
        }
        c/=2
        c = Math.ceil(c)
    }
    console.log(pom);
}
toBin(1, 2)