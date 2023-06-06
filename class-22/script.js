

function getEmail(){
    return(`${this.firstName}.${this.lastName}@gmail.com`)
}


let student = {
    firstName : 'Adam',
    lastName : 'Smith',
    age : 25,

    
}

let teacher = {
    firstName :'Steve',
    lastName : 'Rogers',
    age : 35
}

let teacher2 = {
    firstName : 'tony',
    lastName : 'Stark'
}




console.log(getEmail.call(teacher) )






// call method


