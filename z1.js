function fetchData(){
    var link = "https://api.imgflip.com/get_memes";
    fetch(link)
    .then((res) =>{
        return res.json();
    })
    .then((res) => {
        console.log(res);
        for (let i = 0; i < res.data.memes.length; i++) {
            createCard(res.data.memes[i])
        }
    })
    
    .catch((err) =>{
        console.log(err);
    })
    }
    function createCard(vals)
    {
        kartica=document.createElement("div");
        kartica.style.width="500px";
        slika = document.createElement("img")
        slika.src = vals.url
        slika.style.width = "500px"
        glavni=document.getElementById("glavni");
        glavni.appendChild(slika)
        glavni.appendChild(kartica);
        return kartica;
    }
fetchData();