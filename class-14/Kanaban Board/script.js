let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')

let addTaskFlag = false

console.log(addTaskFlag)


addBtn.addEventListener('click' , function(){
    // Display the model
    addTaskFlag = !addTaskFlag
    
    if(addTaskFlag == true){
        modalCont.style.display = 'flex'
    }
    else{
        modalCont.style.display = 'none'
    }

})