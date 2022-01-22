function velkaSlova(){
    recenica = "danas je lep dan";
    recenica = recenica.split(' ');
    for (let i = 0; i < recenica.length; i++) {
           let rec = recenica[i];
            rec = rec.split('');
            rec[0]=rec[0].toUpperCase();
            rec = rec.join("");
            recenica[i]= rec;
            }
            recenica = recenica.join(" ");
            console.log(recenica);
}
velkaSlova();