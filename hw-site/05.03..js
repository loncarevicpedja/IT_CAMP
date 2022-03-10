// .then((response) => {
//     return response.json()
// })
// .then((response) => {
//     console.log(response)
// })
    // fetch()
    // .then((res) => {
    //     return res.json()
    // })

async function clgFetch(){
    try{
        let newProm = await fetch("https://jsonplaceholder.typicode.com/users")
        let newPromJSON = await newProm.json();
        let niz = []
        niz = newPromJSON.map((person) =>{
            return person.name;
        })
        console.log(niz)
    }
    catch{
        console.log("Greska")
    }
}
clgFetch();