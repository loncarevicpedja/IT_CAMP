var e = 10
function sum(a){
    return function(b){
        return function(c){
            return function(d){
                return a+b+c+d+e;
            }
        }
    }
}
a1=sum(1)
console.log(a1)
a2=a1(2)
console.log(a2)
a3=a2(3)
console.log(a3)
a4=a3(4)
console.log(a4)