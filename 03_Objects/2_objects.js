//Singleton
const objt= new Object()
console.log(objt)
//non signleton
const objt2={}
console.log(objt2)

objt.id=22
objt.name="suyog"
objt.email="sd@gmail.com"

console.log(objt)

const objt3={
    id:23,
    fullname:{
        username:{
            fname:"Suyog",
            lname:"dale"
        }
    }
}
console.log(objt3)
const obj4={
    1:"a",
    2:"b"}
const obj5={
    3:"c",
    4:"d"}
//const obj6={obj4,obj5}
const obj6=Object.assign(obj4,obj5) 
console.log(obj6)