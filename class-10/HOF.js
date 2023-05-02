let myRaidusArray = [2 , 3 , 4 ,5 ,8]


function calculate(radiusArr ,logic){
    let result = []
 
    for(let i=0 ; i<radiusArr.length ; i++){
        result.push(logic(radiusArr[i]))
    }
 
    return result
 }

function circleAreaFn(radius){
    return Math.PI * radius *radius// 12..
} // logic for area

function circleCircumferenceFn(radius){
    return 2*Math.PI*radius
}

function circleDiameterFn(radius){
    return 2*radius
}

 let finalAreas = calculate(myRaidusArray , circleAreaFn)
 let finalCircumferences = calculate(myRaidusArray , circleCircumferenceFn)
 let finaldiameter = calculate(myRaidusArray , circleDiameterFn)
 
 console.log('This is Area Array -> ' , finalAreas)
 console.log('This is Circumference Array -> ' , finalCircumferences)
 console.log('This is Diamter Array -> ' , finaldiameter)