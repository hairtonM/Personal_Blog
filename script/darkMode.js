/* 
    ESTE SCRIPT ME PERMITE DAR UN MODO OSCURO A MI BLOG 
*/


// constantes 

const btnDarkMode = idQuery('.btn_dark_mode')
const body = idQuery('body')

// functions 

// usando localStorage para mantener el modo oscuro activo asi el usuario haga un refres en la ventana del navegador 

function load(){
    const darkMode = localStorage.getItem('darkmode')

    if(darkMode == 'false'){
        store('false')
    }
    else if(darkMode == 'true'){
        body.classList.add('darkmode')
    }
}

function store(estado){
    localStorage.setItem('darkmode', estado)
}

// events 

load()

btnDarkMode.addEventListener('click', () => {

    body.classList.toggle('darkmode') // add & remove the class 'darkmode' when click the button "Dark Mode"
    store(body.classList.contains('darkmode')) // contains('name of class') me devuelve true si la clase darkmode esta en body y false si no se encuentra

    // log(body.classList.contains('darkmode'))
})
