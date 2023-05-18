let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')

// let colors = ["lightpink", "lightgreen", "lightblue", "black"];

let addTaskFlag = false

let modalPrioritycolor ='black'

console.log(addTaskFlag)




// Selecting color for your task

allPriorityColors.forEach(function(colorElem){
    colorElem.addEventListener('click' , function(){
        allPriorityColors.forEach(function(priorityColorElem){
            priorityColorElem.classList.remove('active')
        })
       colorElem.classList.add('active')

       modalPrioritycolor = colorElem.classList[0] // lightpink
    })

    
})


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


modalCont.addEventListener('keydown' , function(e){
    let key = e.key

    if(key==='Shift'){
        createTicket(modalPrioritycolor , textAreaCont.value , shortid()) // ticket generation
        modalCont.style.display = 'none'
        console.log(textAreaCont.value)
        textAreaCont.value = ''
    }
})





function createTicket(ticketColor , ticketTask , ticketID ){
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class' , 'ticket-cont')


    ticketCont.innerHTML =`<div class=" ${ticketColor} ticket-color"></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>`

    mainCont.appendChild(ticketCont)

    

    
}