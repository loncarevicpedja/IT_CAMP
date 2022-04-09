function patern(n){
    var a = 1
    for (var i = 2; i <= n; i++) {
        a += "\n" + 1 + Array(i).join("*") + i
    }
    console.log(a)
}
patern(10)