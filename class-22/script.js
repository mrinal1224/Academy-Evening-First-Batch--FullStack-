

function getEmail(){
    return(`${this.firstName}.${this.lastName}@gmail.com`)
}


function chooseSubject(sub1 , sub2){
   return `${sub1} and ${sub2}`
}

function chooseBatches(batch1 , batch2 , batch3){
  return [batch1 , batch2 , batch3] 
}



let teacher1 = {
    firstName :'Steve',
    lastName : 'Rogers',
    age : 35
}

let teacher2 = {
    firstName : 'tony',
    lastName : 'Stark',
    age : 40
}


let arr = ['septBatch' , 'NovBatch' , 'OctBatch']



// student.getEmail(teacher)  function Borrowing

//  console.log(getEmail.call(teacher1))  // global function call for diffrent Object


console.log(chooseSubject.call(teacher1 , 'Mathematics' , 100 , true))

console.log(chooseSubject.call(teacher2 , 'English' , 'Geography' , false))



//apply 
console.log(chooseBatches.apply(teacher1 ,arr))

console.log(chooseBatches.apply(teacher2 , ['juneBatch' , 'mayBatch' ,'marchBatch']))

//Bind

let callLater = getEmail.bind(teacher1)
console.log(callLater())

























// call method


let student = {
    firstName : 'Adam',
    lastName : 'Smith',
    age : 25,

}