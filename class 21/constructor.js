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



function car(nameParam , colorParam , topSpeedParam){
    this.name =nameParam
    this.color = colorParam
    this.topSpeed = topSpeedParam
}



let car1 = new car("Ferrari" , "Red" , '1000km/hr')

console.log(car1)

let car2 = new car("BMW" , 'white' , '600km/hr')

console.log(car)



// // this - {
//     name : "Feerrari",
//     color : "red",
//     topSpeed : "1000km/hr"
// }


// create a constructor function for creating objects for laptops
// which should have four properties - name , color , RAM , ScreenSize


