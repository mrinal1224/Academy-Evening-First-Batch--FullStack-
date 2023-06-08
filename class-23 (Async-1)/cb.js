let dataArray = [
    {name :'Adam' , age:23},
    {name :'Steve' , age:25},

] // dummy API

function getData(cb){

   setTimeout(function(){
     let output = ''

     dataArray.forEach(function(data){
         output += `<li> ${data.name} </li>`
     })

     document.body.innerHTML = output
   } ,2000)
}



function createData(newData , cb){
    setTimeout(function(){
        dataArray.push(newData)
        cb()
    } ,3000)
}


createData({name:'Mark' , age:30} , getData) // 3 seconds








