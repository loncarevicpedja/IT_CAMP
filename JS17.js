var a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
var rez=0;
while(true)
{
    if(a==1)
    {
        var b=Number(prompt("Unesite prvi broj:"));
        var c=Number(prompt("Unesite drugi broj:"));
        rez=b+c;
        alert("Rezultat je:"+rez);
        a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
        
    }
    else if(a==2)
    {
        var b=Number(prompt("Unesite prvi broj:"));
        var c=Number(prompt("Unesite drugi broj:"));
        rez=b-c;
        alert("Rezultat je:"+rez);
        a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
    }
    else if(a==3)
    {
        var b=Number(prompt("Unesite prvi broj:"));
        var c=Number(prompt("Unesite drugi broj:"));
        rez=b*c;
        alert("Rezultat je:"+rez);
        a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
    }
    else if(a==4)
    {
        var b=Number(prompt("Unesite prvi broj:"));
        var c=Number(prompt("Unesite drugi broj:"));
        rez=b/c;
        alert("Rezultat je:"+rez);
        a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
    }
    else if(a==5)
    {
        alert("Uneli ste 0 izlaz iz programa: ")
        break;
    }
    else{
        alert("Uneli ste pogresan broj pokusajte pononvo: ");
        a = Number(prompt("Izaberite neku operaciju: 1)Sabiranje 2) Oduzimanje 3)Mnozenje 4)Deljenje 5)Izlaz iz programa"));
        
    }
}