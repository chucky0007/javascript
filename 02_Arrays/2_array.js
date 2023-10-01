const fruits=["Apple","Bannana"]
const green_Fruits=["Custard","Watermelon"]
// console.log(fruits)
// fruits.push(green_Fruits)
// console.log(fruits)

const newfruits =fruits.concat(green_Fruits)
console.log(newfruits)

const allfruits= [...fruits,...green_Fruits]
console.log(allfruits)

const mixedArray=[1,2,3,4,[5,6],[7,8,[,9,17,18]]]
const allmix=mixedArray.flat(Infinity)
console.log(allmix)