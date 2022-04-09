function matrica(n, m){
    var a = ""
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            a += i+j
        }
        console.log(a)
        a=""
    }
}
function matricaTr(n, m){
    [n,m]=[m,n]
    matrica(n,m)
}
matrica(5, 3)
console.log("--------------------------------------------")
matricaTr(5, 3)