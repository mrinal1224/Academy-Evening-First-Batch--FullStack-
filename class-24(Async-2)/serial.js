const fs = require('fs')

console.log('Before')

let f1p = fs.promises.readFile('f1.txt')




function cb1(data){
    console.log('This is File 1 Data ->' + data)
    let f2p = fs.promises.readFile('f2.txt')
     return f2p
}

function cb2(data){
    console.log('This is File 2 Data ->' + data)

    let f3p = fs.promises.readFile('f3.txt')

    return f3p
}


function cb3(data){
    console.log('This is File 3 Data ->' + data)
}


f1p.then(cb1).then(cb2).then(cb3)




console.log("after")