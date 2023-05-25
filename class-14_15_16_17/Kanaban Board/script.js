let addBtn = document.querySelector('.add-btn')
let removeBtn = document.querySelector('.remove-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let textAreaCont = document.querySelector('.textArea-cont')

let allPriorityColors = document.querySelectorAll('.priority-color')

let colors = ["lightpink", "lightgreen", "lightblue", "black"];

let toolboxColors = document.querySelectorAll('.color')

let lockClass = 'fa-lock' // closed lock
let unlockClass = 'fa-lock-open' // open-lock

let addTaskFlag = false
let removeTaskFlag = false

let modalPrioritycolor = colors[colors.length-1]


let ticketsArr = []

console.log(addTaskFlag)


// local storage

if(localStorage.getItem('tickets')){
    ticketsArr = JSON.parse(localStorage.getItem('tickets'))
    ticketsArr.forEach(function(ticket){
        createTicket(ticket.ticketColor, ticket.ticketTask , ticket.ticketID)
    })
}


// Making Tasks visibile according to colors


for(let i=0 ; i<toolboxColors.length ; i++){
    toolboxColors[i].addEventListener('click' , function(){
        let selectedToolBoxColor = toolboxColors[i].classList[0]

        let filterdTickets = ticketsArr.filter(function(ticket){
            return selectedToolBoxColor === ticket.ticketColor
        })

        console.log(filterdTickets)

        let allTickets = document.querySelectorAll('.ticket-cont')

        for(let i=0 ; i<allTickets.length ; i++){
            allTickets[i].remove()
        }


        filterdTickets.forEach(function(filterdTicket){
            createTicket(
                filterdTicket.ticketColor , filterdTicket.ticketTask , filterdTicket.ticketID
            )

        })
        
 })

    toolboxColors[i].addEventListener("dblclick", function () {
    let allTickets = document.querySelectorAll(".ticket-cont");

    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    ticketsArr.forEach(function (ticketObj) {
      createTicket(
        ticketObj.ticketColor,
        ticketObj.ticketTask,
        ticketObj.ticketID
      );
    });
  });
}

 










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
        createTicket(modalPrioritycolor , textAreaCont.value) // ticket generation
        modalCont.style.display = 'none'
        console.log(textAreaCont.value)
        textAreaCont.value = ''
    }
})



function createTicket(ticketColor , ticketTask  , ticketID ){
   let id = ticketID || shortid()
    let ticketCont = document.createElement('div')
    ticketCont.setAttribute('class' , 'ticket-cont')


    ticketCont.innerHTML =`<div class=" ticket-color ${ticketColor} "></div>
    <div class="ticket-id">${id}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
    <i class="fa-solid fa-lock"></i>
  </div>
    `

    mainCont.appendChild(ticketCont)

    handleRemoval(ticketCont , id)


    handleLock(ticketCont , id )

    handleColor(ticketCont , id)


    if(!ticketID){
        ticketsArr.push({ticketColor , ticketTask , ticketID:id})
        localStorage.setItem('tickets' , JSON.stringify(ticketsArr) )
    }

   
     


      console.log(ticketsArr)
       



    

    
}


function handleRemoval(ticket , id){
   ticket.addEventListener('click' ,function(){
       if(!removeTaskFlag) return

         let idx = getTicketIdx(id)

         ticket.remove() // ui removal

         let deletedElement = ticketsArr.splice(idx , 1)
         console.log(deletedElement)


         localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
       
   })
}



function handleLock(ticket , id){
  let ticketLockElem = ticket.querySelector('.ticket-lock')

  let ticketLockIcon = ticketLockElem.children[0]

  let ticketTaskArea = ticket.querySelector('.task-area')



  ticketLockIcon.addEventListener('click' , function(){

    let ticketIdx = getTicketIdx(id)
      if(ticketLockIcon.classList.contains(lockClass)){
          ticketLockIcon.classList.remove(lockClass)
          ticketLockIcon.classList.add(unlockClass)
          ticketTaskArea.setAttribute('contenteditable' , 'true')
        }else{
        ticketLockIcon.classList.remove(unlockClass)
        ticketLockIcon.classList.add(lockClass)
        ticketTaskArea.setAttribute('contenteditable' , 'false')
      }


      ticketsArr[ticketIdx].ticketTask = ticketTaskArea.innerText // updated task
      localStorage.setItem('tickets' , JSON.stringify(ticketsArr) )
  })
}


function handleColor(ticket , id){

     
      let ticketColorBand = ticket.querySelector('.ticket-color')

      ticketColorBand.addEventListener('click' , function(){
          let ticketIdx = getTicketIdx(id)
          let currentColor = ticketColorBand.classList[1]

          let currentColorIdx = colors.findIndex(function(color){
              return currentColor === color
          })

          currentColorIdx++

          let newTicketColorIdx = currentColorIdx % colors.length

          let newTicketColor = colors[newTicketColorIdx]

          ticketColorBand.classList.remove(currentColor)
          ticketColorBand.classList.add(newTicketColor)




          ticketsArr[ticketIdx].ticketColor = newTicketColor
          localStorage.setItem('tickets' , JSON.stringify(ticketsArr))
           
      })


}



function getTicketIdx(id){
   let ticketIdx = ticketsArr.findIndex(function(ticketObj){
         return ticketObj.ticketID === id
   })


   console.log(ticketIdx)

   return ticketIdx
}