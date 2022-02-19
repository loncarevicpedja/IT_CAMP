function wash(){

    setTimeout(function() {
        console.log('wash')
    }, 3000);
}
function dry(){

    setTimeout(function() {
        console.log('dry')
    }, 2000);
}
function fold(){

    setTimeout(function() {
        console.log('fold')
    }, 1000);
}
var done = [wash, dry, fold];
function izvrsi(niz){
    done[0](() => {
        done[1](() => {
            done[2](() => {
                console.log("done")
            })
        })
    })
}
console.log("Done")