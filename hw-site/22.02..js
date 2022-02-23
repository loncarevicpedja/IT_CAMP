// function a(ab){
//     console.log("Neki kod")
//     console.log("Nesto")
//     ab();
// }
// function hello(){
//     console.log("Hello world")
// }
// a(hello)


// numbers = [37, 28, 14, 6, 19, 55, 11]
// mojaf = (a, b) => {
//     console.log("broj " + a + " je na poziciji " + b)
// }
// numbers.forEach(mojaf);

// var peoples = [
//     {
//         author: "Bill Gates",
//         title : "the Road Ahead",
//         age: 25
//     },
//     {
//         author: "Bill Gates",
//         title : "the Road Ahead",
//         age: 25
//     },
//     {
//         author: "Bill Gates",
//         title : "the Road Ahead",
//         age: 25
//     },
//     {
//         author: "Bill Gates",
//         title : "the Road Ahead",
//         age: 25
//     },
//     {
//         author: "Bill Gates",
//         title : "the Road Ahead",
//         age: 25
//     }
// ]
// function autori(a){
//     console.log(a.author)
// }
// peoples.forEach((el) => {
//     console.log(el.author)
// });

// numbers = [37, 28, 14, 6, 19, 55, 11]

// evenNum = []

// numbers.forEach((element) => {
//     if(element % 2 === 0)
//     evenNum.push(element)
// });
// console.log(evenNum)
// novi = [NaN, 0, 15, false, -22, "", undefined, 47, null]
// counter = 0
// novi.forEach((a, b) => {
//     if(!a)
//     {
//         counter++        
//     }
    
// });

// console.log(counter)

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();