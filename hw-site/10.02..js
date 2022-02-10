// class Covek{
//     constructor(ime, prezime, godRodjenja, posao)
//     {
//         this.ime = ime;
//         this.prezime = prezime;
//         this.godRodjenja = godRodjenja;
//         this.posao  = posao;
//     }
//     starost() {
//         let datum = new Date();
//         return datum.getFullYear() - this.godRodjenja;
//     }
// } 
// c1 = new Covek("Miljan", "Cosovic", 2000, "Student")
// c2 = new Covek("Marko", "Markovic", 2005, "Ucenik")
// c3 = new Covek("Predrag", "Loncarevic", 2000, "Student")
// c4 = new Covek("Jovan", "Mrljes", 1996, "Serviser")
// niz = []
// niz.push(c1,c2,c3,c4)
// for(let i =0 ;i<niz.length;i++)
// {
//     console.log(niz[i].ime + " " + niz[i].prezime + " ima " + niz[i].starost() + " godina. Zanimanje mu je: " + niz[i].posao + ".");
// }
o1 = {
    name: "Dzemil",
    surname: "Dupljak"
}
o2 = {}
let flatObj = Object.entries(o1)
for (let i = 0; i < flatObj.length; i++) {
        
    console.log(flatObj[i])
    o2[flatObj[i][1] = flatObj[i][0]]
}
console.log(o1)
console.log(o2)