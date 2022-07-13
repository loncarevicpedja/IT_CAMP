var myPromise = new Promise((reslove, reject) => {
    a = 4
    if(a!=4)
    reslove(console.log("AA"))
    else
    reject(console.log("BB"))
})
console.log(myPromise);