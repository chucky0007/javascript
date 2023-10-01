//An array is a collection of multiple items under a single variable name.

const love = [1,2,3,4,"S","R","P"]
console.log("A",love)

//Array methods

love.push("M")
console.log("B", love)

love.pop()
console.log("C",love)

love.unshift("T")
console.log("D",love)

love.shift("T")
console.log("E",love)

console.log(love.slice(0,3))
console.log("F",love)

love.splice(0,3)
console.log("G",love)

const joke = new Array('s','u','y','o','g')
console.log(joke)

