// let car1 = {
//     name : 'ferrari',
//     color : "red",
//     topSpeed : "1000km/hr"
// }



// let car2 = {
//     name : "BMW",
//     color : 'White',
//     topSpeed :'600km/hr'
// }






function Car(nameParam , colorParam , topSpeedParam){
    this.name =nameParam
    this.color = colorParam
    this.topSpeed = topSpeedParam


    this.drive = function(){
        console.log(`I am driving ${this.name} and the color is ${this.color}`)
    }


}



let car1 = new Car("Ferrari" , "Red" , '1000km/hr')

this - {
    name : 'Ferrari',
    color : "red" ,
    topSpeed : '1000km/hr'
}



console.log(car1)

car1.drive()

let car2 = new Car("BMW" , 'white' , '600km/hr')

console.log(Car)

car2.drive()



// // this - {
//     name : "Feerrari",
//     color : "red",
//     topSpeed : "1000km/hr"
// }


// create a constructor function for creating objects for laptops
// which should have four properties - name , color , RAM , ScreenSize


