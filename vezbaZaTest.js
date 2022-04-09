ime = document.getElementById('ime')
prezime = document.getElementById('prezime')
dugme = document.getElementById('dugmence')
dugme.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(ime.value + " " + prezime.value)
})