Array.prototype.myFilter = function(cb){
    let newArr = []

    for(let i=0 ; i<this.length ; i++){
      if(cb(this[i])){
          newArr.push(this[i])
      }
    }

    return newArr
}


let arr = [2, 4 , 5 , 9 , 16]

function isEven(x){
  return x%2===0
}


function isOdd(x){
 return x%2!==0
}

let filtredArrayEven = arr.myFilter(isEven)
let filtredArrayOdd = arr.myFilter(isOdd)

console.log(filtredArrayEven)
console.log(filtredArrayOdd)