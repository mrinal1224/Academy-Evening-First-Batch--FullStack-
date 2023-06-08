// let hello1 = "Hello 1"

// let hello2 = 'Hello 2'

// console.log(hello1)


// for(let i=0 ; i<100000000000 ; i++){
   
// }

// console.log(hello2) // blocking



// Asynchronus Approach


let hello3 = 'hello 3'

let hello4 = 'hello 4'

let hello5 = 'hello5'

let hello6 = 'Hello 6'


console.log(hello3) // 1

console.log(hello5) // 2


setTimeout(function(){
console.log('This is our Asynchronous output')
},0)  //3


console.log(hello4) //4

console.log(hello6) //5