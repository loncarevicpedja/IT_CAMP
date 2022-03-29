// class Nesto{
//     constructor(ime, prezime, godine){
//         this.ime=ime;
//         this.prezime=prezime;
//         this.godine=godine;
//     }
//     punoletean() {
//         if(this.godine > 18)
//         return "jeste"
//         else
//         return "nije"
//     }
// }
// var covek = new Nesto("Marko", "Markovic", 18)
// console.log(covek)
// a = covek.punoletean(); 
// console.log(a)

let p = new Promise((reslove, reject) => {
    let a = 3 + 1
    if(a == 2){
        reslove("2")
    }
    else{
        reject("nije 2")
    }
})
p.then((poruka) => {
    console.log("Rezultat je " + poruka)
}).catch((poruka) => {
    console.log("Rezultat " + poruka)
})