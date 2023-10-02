//without variable
function addtwonumbers(num1,num2)
{
console.log(num1+num2)
}
addtwonumbers(2,2)

//funtion in a variable
const additionOfTwoNumbers=function(num1,num2)
{
console.log(num1+num2)
}
additionOfTwoNumbers(4,4)

//funtion with rest operator
function addition(v1,...n1){
    console.log(v1)
}

addition(200,400,600)

//function with return

function resOfAddtion(v1,v2){
return v1+v2
}
const result=resOfAddtion(8,8)
console.log(result)

