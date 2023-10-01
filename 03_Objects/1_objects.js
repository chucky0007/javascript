//singleton
//object create

//Objects literals
const Mysmb= Symbol("Key1")
console.log(Mysmb)
const company =
{
name:"Suyog",
[Mysmb]:"Key2",
age:25,
gender:"Male",
isAlive:"Yes"
}

console.log(company.name)
console.log(company["name"])
console.log(company[Mysmb])