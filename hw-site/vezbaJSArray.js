class Nesto{
    constructor(ime, prezime, godine){
        this.ime=ime;
        this.prezime=prezime;
        this.godine=godine;
    }
    punoletean() {
        if(this.godine > 18)
        return "jeste"
        else
        return "nije"
    }
}
var covek = new Nesto("Marko", "Markovic", 18)
console.log(covek)
a = covek.punoletean(); 
console.log(a)