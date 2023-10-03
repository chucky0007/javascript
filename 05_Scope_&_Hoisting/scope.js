//Global Scope

let val1="Suyog"
var val2="Love"
const score=20

console.log(val1)
console.log(val2)
console.log(score)

{
    //block/Local Scope
    let val1="Dale"
    //var val2="Hate"
    const score=220

    console.log(val1)
console.log(val2)
console.log(score)
}

//without variable
function addtwonumbers(num1,num2)
{
console.log(num1+num2)
}
addtwonumbers(2,2)

//funtion in a variable calling early is called hoisting
const additionOfTwoNumbers=function(num1,num2)
{
console.log(num1+num2)
}
additionOfTwoNumbers(4,4)
