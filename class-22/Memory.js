


// Primitive DataType - Stack (pass by value)
// let firstPerson = 'Adam'
// let secondPerson = firstPerson

// firstPerson = 'Steve'

// console.log(firstPerson) // steve
// console.log(secondPerson) // Adam


// Reference dataType - Stack and Heap (Pass by reference)
let person1 = {
    name : 'Adam',
    age : 25,

    address : {
        city : 'Mumbai',
        pincode : '123456'
    }
}


let person2 = {...person1}

person2.name = 'Steve'

person2.address.city = 'Delhi'


// console.log(person1)
// console.log(person2)


//Shallow Copy

// spread operator - ...


//Deep Copies



let person3 = {
    name : 'Adam',
    age : 25,

    address : {
        city : 'Mumbai',
        pincode : '123456',
        state :{
            name : 'Maharastra'
        }
    }
}


let person4 = JSON.parse(JSON.stringify(person3)) // Deep copy

console.log(person4)

// person4.address.city = 'Delhi'

// person4.address.state.name = 'Karnataka'

// console.log(person3)
// console.log(person4)

















