// Map - Map method is used when you want to do some operations with your array elements
// it will not change your original Array

let myarr= [1,2 ,3 ,4 ,5]

// function sqaureArrFn(arr){
//     let SqaureArr = []

//     for(let i=0 ; i<arr.length;i++){
//         SqaureArr.push(arr[i]*arr[i])
//     }

//     return SqaureArr
    
// }

// let sqaureArrFinal = sqaureArrFn(arr)
// console.log(sqaureArrFinal)


let sqauredValues = myarr.map(function(num){
    return num *num
})

console.log(sqauredValues)

// Question-


const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];
const inrtToUsd = 82;

// use map
 let conversiontoDollars = transactions.map(function(amount){
     return amount/inrtToUsd
 })

 console.log(transactions)
 console.log(conversiontoDollars)



