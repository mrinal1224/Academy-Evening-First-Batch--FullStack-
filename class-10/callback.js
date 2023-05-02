function printName(cb1){
    console.log('Shikhar')
    cb1() // printLastname
}

function printLastName(){
    console.log('Singh')
    
}


printName(printLastName)
