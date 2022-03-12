// var div = document.getElementById("conteiner")
// var div_unutrasnji = document.createElement("div")
// div_unutrasnji.style.backgroundColor = "red"
// div_unutrasnji.style.width = "100px"
// div_unutrasnji.style.height = "100px"
// div.appendChild(div_unutrasnji)

function generateCard(val) {
  var subEl = document.createElement("div");
  subEl.style.background = "skyblue";
  subEl.style.border = "1px solid black";
  subEl.style.width = "200px";
  subEl.style.height = "200px";
  subEl.style.borderRadius = "15px";
  subEl.innerHTML = val.fact;
  return subEl;
}

var ctr = document.getElementById("conteiner");
ctr.style.display = "flex";
ctr.style.justifyContent = "flex-start";
ctr.style.flexWrap = "wrap";

fetch("https://catfact.ninja/facts  ")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    for (let i = 0; i < res.data.length; i++) {
      ctr.appendChild(generateCard(res.data[i]));
    }
  })
  .catch((err) => {
    console.log(err);
  });
