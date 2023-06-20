// function fn(a){
//     return function (b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// let returnedvalue = fn(3)(4)(5)

// console.log(returnedvalue)

// let nextReturnedFn = returnedFunction(4)

// nextReturnedFn(5)


// Question 1

// Multiply(2)(3)(3) => 18 , make use of function currying

// function multiply(a ,b ,c){
//     return a*b*c
// }

// let product = multiply(2 ,3 ,3)

// console.log(product)

// function multiplyCurried(a){
//     return function(b){
//         return function(c){
//             return a*b*c
//         }
//     }
// }

// console.log(multiplyCurried(2)(3)(3))




// Question 2 - >

// calculate('sum')(3)(4) -> 7
// calculate('substrat')(5)(2) -> 3
// calculate('multiply')(3)(4) -> 12
// calculate('divide')(8)(4) -> 2


function calculate(operation){
    return function(a){
        return function(b){
            if(operation ==='sum') return a+b
            else if(operation==='multiply') return a*b
            else if(operation==='substarction') return a-b
            else if(operation==='division') return a/b
            else return 'Invalid Operation'
        }
    }
}

// console.log(calculate('sum')(4)(3)) // 7
// console.log(calculate('multiply')(4)(3))// 12


// Question - 3

// Infinite currying

// write an add function which can add values like this

// add(2)(3)(4)(5)......()

// function add(a){
//     return function(b){
//         if(b) return add(a+b)
//         return a;
//     }
// }


// console.log(add(2)(3)(4)(4)(6)())


// Partial Applications

function sum(a){
    return function(b, c){
        return a+b+c
    }
}

// const x = sum(7)

// console.log(x(3 , 4))

console.log(sum(10)(2,3))











