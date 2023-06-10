const fs = require('fs')


// fs.readFile('f1.txt' , cb)


// function cb(err , data){
//    if(err){
//        console.log(err)
//    }else{
//        console.log("this is File 1 data ->  " + data)
//    }
// }


let f1p = fs.promises.readFile('f1.txt')
let f2p = fs.promises.readFile('f2.txt')
let f3p = fs.promises.readFile('f3.txt')


function readFileCallback(data){
    console.log('This is the data -> ' + data)
}

function handleError(err){
    console.log("This is my error-> " + err)
}


f1p.then(readFileCallback)
f2p.then(readFileCallback)
f3p.then(readFileCallback)

f1p.catch(handleError)
f2p.catch(handleError)
f3p.catch(handleError)















