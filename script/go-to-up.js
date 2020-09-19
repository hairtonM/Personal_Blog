
/* 
    ESTE SCRIPT ME PERMITE CREAR UN ICONO QUE ME LLEVE AL INICIO CUANDO SE HAGA UN SCROLL HASTA MUY ABAJO DE LA WEBSITE 

    @autor Hairton M.
*/ 


// variables 

var iconTop = idQuery('.go-up')

// functions 

function goToUp(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// event scroll

window.onscroll = () => {
    //log(document.documentElement.scrollTop)

    var scrollUserValue = document.documentElement.scrollTop

    if(scrollUserValue > 350){
        iconTop.classList.add("go-up--show")
    }
    else{
        iconTop.classList.remove("go-up--show")
    }
}

// event click

iconTop.addEventListener('click', () => {
    setTimeout(goToUp, 300)
})