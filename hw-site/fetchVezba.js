var link = "https://catfact.ninja/facts"
function fetchData(){
    fetch(link)
    .then((podatak) => {
        return podatak.json()
    })
    .then((podatak) => {
        console.log(podatak)
        gla.innerHTML = ""
        for (let i = 0; i < podatak.data.length; i++) {
            generateCard(podatak.data[i])        
        }
        paginacija.innerHTML = ""
        for (let i = 0; i < podatak.links.length; i++) {
            generatePage(podatak.links[i])        
        }
    })
    .catch((err) => {
        console.log(err)
    })
}
function generateCard(vals){
    kartica = document.createElement('div')
    kartica.style.backgroundColor = "red"
    kartica.style.width = "200px"
    kartica.style.height = "300px"
    kartica.innerHTML = vals.fact;
    var glavni = document.getElementById('glavni')
    glavni.appendChild(kartica)
    return kartica
}
function generatePage(vals){
    page = document.createElement('button')
    page.innerHTML = vals.label
    page.onclick = function (e)
    {
        e.preventDefault()
        link = vals.url
        fetchData()
    }
    page.style.backgroundColor = "red"
    page.innerHTML = vals.label;
    var gl = document.getElementById('paginacija')
    gl.appendChild(page)
    return page
}
gla = document.getElementById('glavni')
gla.style.display = "flex"
gla.style.flexDirection = "row"
gla.style.gap = "20px"
gla.style.flexWrap = "wrap"

paginacija = document.getElementById('paginacija')
paginacija.style.width = "97vw"
paginacija.style.height = "70px"
paginacija.style.display = "flex"
paginacija.style.flexDirection = "row"
paginacija.style.alingItem = "center"
paginacija.style.justifyContent = "center"
paginacija.style.backgroundColor = "silver"
fetchData()