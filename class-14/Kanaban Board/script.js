let addBtn = document.querySelector('.add-btn')
let removeBtn = document.querySelector('.remove-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')

let colors = ["lightpink", "lightgreen", "lightblue", "black"];

let lockClass = 'fa-lock' // closed lock
let unlockClass = 'fa-lock-open' // open-lock

let addTaskFlag = false
let removeTaskFlag = false

let modalPrioritycolor = colors[colors.length-1]

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

removeBtn.addEventListener('click' , function(){
    removeTaskFlag = !removeTaskFlag

    if(removeTaskFlag==true){
        alert('delete button has been activated')
        removeBtn.style.color = 'red'
    }
    else{
        removeBtn.style.color = 'white'
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


    ticketCont.innerHTML =`<div class=" ticket-color ${ticketColor} "></div>
    <div class="ticket-id">${ticketID}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
  </div>
    `

    mainCont.appendChild(ticketCont)

    handleRemoval(ticketCont)


    handleLock(ticketCont)

    handleColor(ticketCont)



    

    
}


function handleRemoval(ticket){
   ticket.addEventListener('click' ,function(){
       if(!removeTaskFlag) return

       else{
           ticket.remove()
       }
   })
}



function handleLock(ticket){
  let ticketLockElem = ticket.querySelector('.ticket-lock')

  let ticketLockIcon = ticketLockElem.children[0]

  let ticketTaskArea = ticket.querySelector('.task-area')



  ticketLockIcon.addEventListener('click' , function(){
      if(ticketLockIcon.classList.contains(lockClass)){
          ticketLockIcon.classList.remove(lockClass)
          ticketLockIcon.classList.add(unlockClass)
          ticketTaskArea.setAttribute('contenteditable' , 'true')
        }else{
        ticketLockIcon.classList.remove(unlockClass)
        ticketLockIcon.classList.add(lockClass)
        ticketTaskArea.setAttribute('contenteditable' , 'false')
      }
  })
}


function handleColor(ticket){
      let ticketColorBand = ticket.querySelector('.ticket-color')

      ticketColorBand.addEventListener('click' , function(){
          let currentColor = ticketColorBand.classList[1]

          let currentColorIdx = colors.findIndex(function(color){
              return currentColor === color
          })

          currentColorIdx++

          let newTicketColorIdx = currentColorIdx % colors.length

          let newTicketColor = colors[newTicketColorIdx]

          ticketColorBand.classList.remove(currentColor)
          ticketColorBand.classList.add(newTicketColor)
           
      })


}