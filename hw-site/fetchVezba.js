function fetchData(){
    var fetchLink="https://catfact.ninja/facts"
    fetch(fetchLink)
    .then((res) => {
        return res.json()
    })
    .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
            glDiv.appendChild(generateCard((res.data[i])))
        }
        console.log(res)
        for (let i = 0; i < res.data.length; i++) {
            pagination.appendChild(generatePage((res.data[i])))
        }
        
    })
    .catch((err) => {
        console.log(err)
    })
}
var glDiv = document.getElementById('glavni')
glDiv.style.display = "flex"
glDiv.style.flexDirection = "row"
glDiv.style.flexWrap = "wrap"
var pagination = document.getElementById('paginacija')
pagination.style.display = "flex"
pagination.style.flexDirection = "row"
pagination.style.backgroundColor = "silver"
pagination.style.width = "97wh"
pagination.style.height = "50px"
pagination.style.alignItems = "center"
pagination.style.justifyContent = "center"


function generateCard(podatak){
    var kartica = document.createElement('div')
    kartica.style.background= "skyblue"
    kartica.style.height = "100px"
    kartica.style.width = "300px"
    kartica.style.margin = "20px"
    kartica.innerHTML = podatak.fact
    return kartica
}
function generatePage(podatak){
    var kartica = document.createElement('div')
    kartica.style.background= "skyblue"
    kartica.style.height = "100px"
    kartica.style.width = "300px"
    kartica.style.margin = "20px"
    kartica.innerHTML = podatak.links.label
    return kartica
}
fetchData()