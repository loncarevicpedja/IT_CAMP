// // ime = document.getElementById('ime')
// // prezime = document.getElementById('prezime')
// // dugme = document.getElementById('dugmence')
// // dugme.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     console.log(ime.value + " " + prezime.value)
// // })
// fetchLink = "https://catfact.ninja/facts"
// function fechuj(){
//     fetch(fetchLink)
//     .then((resp) => {
//         return resp.json()
//     })
//     .then((resp) => {
//         console.log(resp)
//         for (let i = 0; i < resp.data.length; i++) {
//             genCrads(resp.data[i])            
//         }
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// }
// function genCrads(title){
//     card = document.createElement('div')
//     card.style.width = "200px"
//     card.style.height = "300px"
//     card.style.backgroundColor = "skyblue"
//     card.style.padding = "10px"
//     card.innerHTML = title.fact
//     kontejner.appendChild(card)

// }
// kontejner = document.getElementById('kontejner')
// kontejner.style.width = "100%";
// kontejner.style.display = "flex"
// kontejner.style.flexDirection = "row"
// kontejner.style.flexWrap = "wrap"
// kontejner.style.gap = "30px"

// fechuj()
// prom = new Promise((reslove, reject) => {
//     a=2;
//     if(a==5)
//         return reslove();
//     else
//     return reject();
// })
// prom.reslove( console.log("A je 5"))
// prom.reject(console.log("A nije 5"))

var obj = {
    ime: "Predrag",
    prezime: "Loncarevic",
    godine: "21"
}
console.log(obj)