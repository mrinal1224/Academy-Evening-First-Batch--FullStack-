const fs = require("fs")

// Synchronously Reading Files

// console.log('Before')

// let data1 = fs.readFileSync('f1.txt')
// let data2 = fs.readFileSync('f2.txt')
// let data3 = fs.readFileSync('f3.txt')

// console.log('This is file 1 data->  '+ data1)
// console.log('This is file 1 data->  '+ data2)
// console.log('This is file 1 data->  '+ data3)

// console.log('after')

// Asynchronous Way


console.log('before')

fs.readFile('f1.txt' , readFileCallback1)


function readFileCallback1(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File 1 data ->' + data)
    }
}

fs.readFile('f2.txt' , readFileCallback2)


function readFileCallback2(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File 1 data ->' + data)
    }
}

fs.readFile('f3.txt' , readFileCallback3)


function readFileCallback3(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File 1 data ->' + data)
    }
}

console.log('after')


console.log("hello")


console.log("Bye")






