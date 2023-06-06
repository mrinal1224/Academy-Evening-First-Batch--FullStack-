let person = {
    name : 'Adam',
    age : 25
}


// let arr = [1 , 2, 3 , 5]

// console.log(arr)


// let person2 = {
//     name : 'mark',
//     age : 26
// }


// console.log(person)
// console.log(person2)


// let isvalid = person.hasOwnProperty('gender')

// console.log(isvalid)




function Car(carName , carColor){
    this.name = carName
    this.color = carColor


    
}

Car.prototype.drive = function(){
    console.log(`I am Driving ${this.name}`)
}

Car.prototype.hasOwnProperty = function(){
    console.log(`Appling brakes`)
}



let car1 = new Car('BMW' , 'White')
let car2 = new Car('Mercedes' , 'Red')

let car3 = new Car('Jaguar' , 'Black')

console.log(car1)
console.log(car2)
console.log(car3)


car2.hasOwnProperty()



