// USANDO JS puro para hacer los efectos en el menù de navegaciòn 

// MÈTODOS ABREVIADOS

const log = console.log
const idQuery = document.querySelector.bind(document)
const idQueryAll = document.querySelectorAll.bind(document)

// variables 

let switchMenu = idQuery('.main-menu__icon')
let menuPrincipal = idQuery('.menu-principal')

// functions 

const loadIconMenu = (elem) => {
    //elem.src = "file:///C:/Users/mayhu/Escritorio/personalBlog/img/icon_plus_menu.svg" en mi localhost
    elem.src = "../img/icon_plus_menu.svg" // usando el servidor de visual studio code
}

// events 

window.onload = loadIconMenu(switchMenu)

switchMenu.addEventListener('click', () => {
    if(menuPrincipal.style.display === "flex"){
        menuPrincipal.style.display = "none"
        // switchMenu.src = "file:///C:/Users/mayhu/Escritorio/personalBlog/img/icon_plus_menu.svg"
        switchMenu.src = "../img/icon_plus_menu.svg"
    }
    else{
        menuPrincipal.style.display = "flex"
        // switchMenu.src = "file:///C:/Users/mayhu/Escritorio/personalBlog/img/icon_x_menu.svg"
        switchMenu.src = "../img/icon_x_menu.svg"   
    }
})




