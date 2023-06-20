let arr = [1 ,2 ,3 ,4]


let sum = arr.reduce(function(acc ,curr){
    return acc+curr
} , 0)

console.log(sum)



Array.prototype.myReduce = function(cb , initialValue){
    let accumulator = initialValue

    for(let i=0 ; i<this.length ; i++){
        accumulator = cb(accumulator , this[i])
    }

    return accumulator
}


let arr2 = [4 ,5 , 2 , 5]

let summedArray = arr2.myReduce(function(accumulator , currentValue){
    return accumulator+currentValue
} , 0)

console.log(sum)