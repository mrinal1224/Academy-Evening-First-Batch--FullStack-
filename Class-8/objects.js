//Object in JavaScript are basically data stored in the form of key value pair 

// This is the syntax of initializing an Object
// let person = {}


// let person = {
//     name : 'Mrinal',
//     age :24,
//     phone : 1234567
// }

// console.log(person)

// //dot notation

// console.log(person.age)

// //bracket Notation

// console.log(person['phone'])

let captainAmeria = {
    name : 'Steve Rogers',
    age : 102,
    allies: ['Tony' , 'bruce' , 'Bucky'],

    sayHi : function(){
        console.log('Captain Says hi')
    },

    address : {
        country:'USA',
        city : {
            name :'Brooklyn',
            pincode : 12345
        },
},

    isAvenger : true

}




console.log(captainAmeria.age)

console.log(captainAmeria.allies[1])

console.log(captainAmeria.address.city.pincode)

captainAmeria.isAvenger = false



captainAmeria.movies = ['End Game' , 'Age of Ultorn' , 'Civli War']




captainAmeria.sayHi()


delete captainAmeria.age

console.log(captainAmeria)















