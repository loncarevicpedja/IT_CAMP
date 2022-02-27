// niz1 = [1, 3, 2, 1, 2, 2, 3]
// function find(arr1, arr2){
//     arr2.forEach((el) => {
//         if(arr1.includes(el))
//         {
//             arr1.splice(arr1.indexOf(el), 1)
//         }
//     });
//     console.log(arr1)
// }
// find([1, 2, 3, 4], [1, 2, 4])

const heroes = [
    {name:'Thor'},
    {name:'Black Panther'},
    {name:'Captain Marvel'},
    {name:'Silver Surfer'},
];
const herNew = heroes.map((el, indeks) => {
    return{
        id: indeks,
        hero: el.name
    };
})
console.log(herNew)