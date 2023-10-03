let name="Suyog";
console.log(this.name)
function add(n1,n2){
    let lname="Dale"
    console.log(this.lname)
    return console.log(`Addition of Two numbers is ${n1+n2}`) ;
}
add(2,2);

(function addition(v1,v2){
    return console.log(`Addition of Two numbers is ${v1+v2}`) ;
})(4,4);

((c1,c2)=>{
    return console.log(`Addition of Two numbers is ${c1+c2}`) ;
})(8,8)

console.log(this.name)
console.log(this.lname)