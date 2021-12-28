a=parseInt(prompt("Unesite dimenzije prve stranice:"));
b=parseInt(prompt("Unesite dimenzije druge stranice:"));
c=parseInt(prompt("Unesite dimenzije trece stranice:"));
if(a+b<c && (a!==0 || b!==0|| c!==0)){
    alert("Nije moguce je napreaviti trougao od ovih stranice");
}
else{
    alert("Moguce je napreaviti trougao od ovih stranice");

}