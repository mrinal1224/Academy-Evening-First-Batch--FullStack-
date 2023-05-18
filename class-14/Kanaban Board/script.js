let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let textArea = document.querySelector('.textArea-cont')

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
        createTicket(modalPrioritycolor) // ticket generation
        modalCont.style.display = 'none'
        textArea.value = ''

    }
})





function createTicket(ticketColor){
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class' , 'ticket-cont')


    ticketCont.innerHTML =`<div class=" ${ticketColor} ticket-color"></div>
    <div class="ticket-id">12345</div>
    <div class="task-area">Random Task</div>`

    mainCont.appendChild(ticketCont)

    
}