//Filter - Filter is a Higher order function which will work based on a condition 
// and will only have the values inisd the array for which the condition is satisfied


let myArr = [1 , 2 ,5 ,7 ,8,2 ,6 ,9, 13 ,17]

//true and false


let evenArr = myArr.filter(function(num){
    return num%2==0
})

console.log(evenArr)

const transactions = [1000, 3000, 4000, 2000, -898, 3800, -4500];

let positiveValues = transactions.filter(function(num){
    return num >0
})

console.log(positiveValues)




