let myRaidusArray = [2 , 3 , 4 ,5 ,8]


// to define area , cirucumference and diameter for all of these radiuses


function calculateArea(radiusArr){
   let result = []

   for(let i=0 ; i<radiusArr.length ; i++){
       result.push(Math.PI * radiusArr[i]*radiusArr[i])
   }

   return result
}


let finalAreas = calculateArea(myRaidusArray)

console.log('This is Area Array -> ' , finalAreas)


function calculateCirumference(radiusArr){
    let result = []

    for(let i=0 ; i<radiusArr.length ; i++){
        result.push(2*Math.PI * radiusArr[i])
    }

    return result
}


let finalCircumferences = calculateCirumference(myRaidusArray)
console.log('This is Circumfernec Array -> ', finalCircumferences)


function calculateDiameter(radiusArr){
    let result = []

    for(let i=0 ; i<radiusArr.length ; i++){
        result.push(2*radiusArr[i])
    }

    return result
}