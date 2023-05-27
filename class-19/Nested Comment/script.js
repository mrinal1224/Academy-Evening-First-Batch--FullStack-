let commentContainer = document.querySelector('.comment-container')


function createInputBox(){
    let div = document.createElement('div')

    div.setAttribute('class' , 'comment-reply-section')

    div.innerHTML = `  <input type="text" placeholder="Write your Reply" , class="input">
    <button class="btn submit">Submit</button>`

    return div
}


function addReply(text){
    let div = document.createElement('div')

    div.setAttribute('class' , 'all-comments')

    div.innerHTML= `<div class="card">
    <span class="text">${text}</span>
    <span id="reply" class="reply">Add Reply</span>
</div>`

return div
}






commentContainer.addEventListener('click' , function(e){
    let replyBtnClicked = e.target.classList.contains('reply')
    let submitBtnClicked = e.target.classList.contains('submit')
    
    let closestCard = e.target.closest('.all-comments')

    console.log(closestCard)

    if(replyBtnClicked===true){
           closestCard.appendChild(createInputBox())
    }


    if(submitBtnClicked===true){

          const commentClosest = e.target.closest('.comment-reply-section')

          if(commentClosest.children[0].value){
              closestCard.appendChild(addReply(commentClosest.children[0].value))
              commentClosest.remove()
          }

}
})











