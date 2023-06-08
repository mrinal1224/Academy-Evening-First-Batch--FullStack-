let dataArray = [
    {name :'Adam' , age:23},
    {name :'Steve' , age:25},

] // dummy API

function getData(){

   setTimeout(function(){
     let output = ''

     dataArray.forEach(function(data){
         output += `<li> ${data.name} </li>`
     })

     document.body.innerHTML = output
   } ,2000)
}



function createData(newData){
    setTimeout(function(){
        dataArray.push(newData)
    } ,1000)
}


createData({name:'Mark' , age:30}) // 3 seconds
getData() // 2seconds




console.log(dataArray)





