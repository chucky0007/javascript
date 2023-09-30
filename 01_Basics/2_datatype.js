//Two types of datatypes
//1)Premetive & 2)Non Premetive

//1) Premetive
//i) string
//ii) number
//iii) bollean
//iv) null
//v) undefined
//vi) symbol
//vii)

let name  = "Suyog Ramesh Dale"
let age=25
let isMale=true
let lifespan=null
let death;

console.log([name],[age],[isMale],[lifespan],[death])
console.log(typeof name ,typeof age ,typeof isMale ,typeof lifespan ,typeof death)






//2) Non Premetive
//i)Array
//ii)Object
//iii)Function


let subjects =["Maths","IT","Science","Chemistry","Physics"];
console.log(subjects)
console.log(typeof subjects)

let myObj = {
fname:"Suyog",
lname:"dale",
age:25
}

console.log(myObj)
console.log(typeof myObj)

let myfuntion = function()
{
    console.log(2+2);
}
console.log(myfuntion())
console.log(typeof myfuntion)