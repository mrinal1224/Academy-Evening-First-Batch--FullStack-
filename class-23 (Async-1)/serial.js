console.log('before')

fs.readFile('f1.txt' , readFileCallback1)


function readFileCallback1(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File 1 data ->' + data)
        fs.readFile('f2.txt' , readFileCallback2)
    }
}




function readFileCallback2(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File 2 data ->' + data)
        fs.readFile('f3.txt' , readFileCallback3)
    }
}




function readFileCallback3(err , data){
    if(err){
        console.log(err)
    }else{
        console.log('File  data ->' + data)
    }
}

console.log('after')
