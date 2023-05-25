let container = document.getElementById('container')


let filled = 0;


let star = document.querySelectorAll('.star')


container.addEventListener('click' , function(e){
    let currentClicked = e.target.dataset.index

    for(let i=0 ; i<filled ; i++ ){
        star[i].classList.remove('star-colored')
    }

    for(let i=0; i<currentClicked ;i++ ){
        star[i].classList.add('star-colored')
    }


    filled = currentClicked
})