// Map Method

 let arr = [1 , 2,3, 4]

// let squaredArr = arr.map(function(x){
//     return x*x
// })

// console.log(squaredArr)


// Write the Polyfill for the Map method


let arr2 = [4 , 5 ,7 ,8]


Array.prototype.myMap = function(cb){
    let newArr = []

    for(let i=0 ; i<this.length ; i++){
           newArr.push(cb(this[i]))
    }

    return newArr
}


function sqaure(x){
    return x*x
}

function multiplyByTwo(x){
    return x*2
}

function cube(x){
    return x*x*x
}

console.log(arr2.myMap(cube))
console.log(arr2.myMap(multiplyByTwo))

console.log(arr.myMap(sqaure))