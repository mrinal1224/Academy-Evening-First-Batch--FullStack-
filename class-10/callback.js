function printName(cb1 , cb2 , cb3 , num){
    console.log('Shikhar')
    cb1()
    cb2()
    cb3()
    return num
}





function printLastName(){
    console.log('Singh')
    
}


function printAge(){
    console.log(25)
}

function printAddres(){
    console.log('Delhi')
}


function printAnyRandomNumber(){
    console.log(2)
}


let a = printName(printLastName, printAge , printAddres , 10)

console.log('This is returned Output '+ a)