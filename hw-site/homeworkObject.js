// var Student = {
//     name: "Predrag",
//     surname: "Loncarevic",
//     age: "22"
// }
// console.log("Ime: " + Student.name);
// console.log("Prezime: " + Student.surname);
// console.log("Starost: " + Student.age);
var student = [{
    name: "Predrag",
    surname: "Loncarevic",
    age: "22",
    status: true,
},
{
    name: "Miljan",
    surname: "Cosovic",
    age: "22",
    status: false,
},
{
    name: "Samil",
    surname: "Plojovic",
    age: "22",
    status: true,
}]

for(let i = 0; i<student.length;i++)
{
    if(student[i].status)
    {
        console.log(student[i].name + " " +student[i].surname + ": Procitao")
    }
    else{
        console.log(student[i].name + " " +student[i].surname + ": Nije procitao")
    }
}