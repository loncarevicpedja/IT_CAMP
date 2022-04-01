function pageNav(vals)
{
  let nav=document.createElement('a');
  nav.innerHTML=vals.label
  if(vals.active)
  {
    nav.style.backgroundColor='white'
  }
  if(!vals.active)
  {
    nav.classList.add='disabled-href'
  }
  nav.onclick = function (e) {
      e.preventDefault()
      fetchLink = vals.url
      fetchData()
  }
  return nav
}




function generateCard(vals)
{
  var subEl=document.createElement('div');
  subEl.style.backgroundColor='green';
  subEl.style.border='1 px solid black';
  subEl.style.width='300px';
  subEl.style.height='200px';
  subEl.style.margin='10px';
  subEl.innerHTML=vals.fact;
  return subEl

}

var ctr=document.getElementById('container');
ctr.style.display='flex';
ctr.style.justifyContent='flex-start';
ctr.style.flexWrap='wrap';


var pagintationCtr = document.getElementById("pagination-container");


  var fetchLink="https://catfact.ninja/facts"


function fetchData()
{

fetch(fetchLink)
.then((res) => {
  return res.json();
})
.then((res) =>{
    ctr.innerHTML=""
  for(let i=0; i<res.data.length;i++)
  {
    ctr.appendChild(generateCard(res.data[i]))
  }
  pagintationCtr.innerHTML = ""
  for(i=0;i<res.links.length;i++)
  {
    pagintationCtr.appendChild(
      pageNav(res.links[i])
    )
  }
})
.catch((error) =>{
  console.log(error);
})
}
fetchData();