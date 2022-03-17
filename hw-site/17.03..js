var btn = document.getElementById("btn")
btn.addEventListener('click', (e) => {
    e.preventDefault()
    const user = {
        name :e.target.form[0].value,
        surname:e.target.form[1].value,
        username:e.target.form[2].value,
        password:e.target.form[3].value
    }
    console.log(user)
    fetch('https://serene-fortress-45917.herokuapp.com/v1/auth/signup',
    {
        method: 'POST',
    headers: {
      "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
    },
    body: JSON.stringify(user)
  }).then(res.json())
  .then(res => {
    // Handle response 
    console.log(res);
  })
  .catch(err => {
    // Handle error 
    console.log(error);
    })
})