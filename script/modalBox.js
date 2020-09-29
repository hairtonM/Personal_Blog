
// variables 

let iconGithub = idQuery('.iconGithub')
let iconYoutube = idQuery('.iconYoutube')
let iconFacebook = idQuery('.iconFacebook')
let iconTwitter = idQuery('.iconTwitter')
let iconImstagram = idQuery('.iconImstagram')
let iconWhatsapp = idQuery('.iconWhatsapp')

let mainModal = idQuery('.main-modal')
let titleModal = idQuery('.modal-box__title')
let imgModal = idQuery('.modal-box__img')
let descpModal = idQuery('.modal-box__desc')
let btnCloseModal = idQuery('.modal-box__close')

// functions 

const hideModal = (modal) => {
    modal.style.display = "block"
}

const setTitlelModal = (ElemTitle, titleString) => {
    ElemTitle.textContent = titleString
}

const setImageModal = (ElemImg, ruta) => {
    ElemImg.src = ruta
}

// events 

window.onclick = function(event){
    if(event.target == mainModal){
        mainModal.style.display = "none"
    }
}

// close the modal when the user press the "x"

btnCloseModal.addEventListener('click', () => {
    mainModal.style.display = "none"
})


// event github

iconGithub.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "hairtonM")
    setImageModal(imgModal, "../img/second_github.png")
    descpModal.innerHTML = `En mi repositorio encontraras mis útlimos proyectos 🙌😃 de Desarrollo Web. <a href="https://github.com/hairtonM" target="_blank" class="modal-box__link">Go</a>`
})


// event youtube

iconYoutube.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "HM Tech")
    setImageModal(imgModal, "../img/myPhotoYoutube.jpg")
    descpModal.innerHTML = `Este canal tiene como propòsito enseñar y otorgar los conocimientos necesarios en el mundo del Desarrollo Web. <a href="https://www.youtube.com/channel/UCDT1DvPPMn2Gk6Nc1EH74Qw?view_as=subscriber" target="_blank" class="modal-box__link">Go</a>`
})


// event facebook

iconFacebook.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "Hairton Mayhuay")
    setImageModal(imgModal, "../img/myPhotoFacebook.jpg")
    descpModal.innerHTML = `Enseñar es una de las cualidades más importantes y sobresalientes. <a href="https://www.facebook.com/hairtonM.Web?ref=bookmarks" target="_blank" class="modal-box__link">Go</a>`
})

// event twitter

iconTwitter.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "@hairton")
    setImageModal(imgModal, "../img/myPhotoTwitter.jpg")
    descpModal.innerHTML = `Autodidacta y Apasionado por enseñar todo sobre el mundo del desarrollo web. <a href="https://twitter.com/hairton70758153" target="_blank" class="modal-box__link">Go</a>`
})

// event Imstagram

iconImstagram.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "Web_hairton")
    setImageModal(imgModal, "../img/myPhotoImstagram.jpg")
    descpModal.innerHTML = `Apasionado por el diseño, autodidacta en el modelamiento y desarrollo de websites.  <a href="https://www.instagram.com/htm_css_js_hairton/?hl=en" target="_blank" class="modal-box__link">Go</a>`
})

// event Whatsapp

iconWhatsapp.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "Hairton M.")
    setImageModal(imgModal, "../img/whatsapp.png")
    descpModal.innerHTML = `Hola, Mucho gusto, si deseas más info aquí esta mi Whatsapp Personal (+51 920-803-441)  <a href="https://api.whatsapp.com/send?phone=51920803441&text=Hola! Mucho gusto%20quisiera%20contactarte" target="_blank" class="modal-box__link">Go</a>`
})