let arr = [3 , 2 ,3 , 4 , 5]

// Calculate the Sum of all the elements in array

// let sum = 0

// for(let i=0 ; i<arr.length ; i++){
//     sum = sum+arr[i]
// }

// console.log(sum)


let totalSum = arr.reduce(function(acc , num){
    acc = acc+num
    return acc
} , 0)

console.log(totalSum)