var a = parseInt(prompt("Unesite proizvoljan broj: "));
var c=0;

for(var i=1;i<=a;i++)
{
    var b=prompt("Unesite " +i +". broj");
    if(b==0)
    {
        c=c;
    }
    else if(b%2 == 0)
    {
        c++;
    }
}

alert("Ukupno parnih brojeva je: " +c);