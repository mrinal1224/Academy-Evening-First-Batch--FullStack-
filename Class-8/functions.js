// Create a beverage vending Machine
//Function Declaration
// function ServeBeverage(drink , quantity){
//     console.log('I want '+ quantity + " " + drink)
// }

// // function Invokation
// ServeBeverage('coffee' , 4) // tea is an argeumet to the tea paramter

// ServeBeverage('Coffee')

// ServeBeverage('Juice')


// Function as Expressions (first Class Citizens)


function sayHiTraditional(){
    console.log('Mrinal Says hi ')
}
//functions as Expressions
let sayHiExpression = function(){
    console.log('mrinal says hi')
}


//Arrow functions

let sayByeArrow =()=>{
  console.log('Mrinal Says Bye')
}

sayHiTraditional()
sayHiExpression()
sayByeArrow()







