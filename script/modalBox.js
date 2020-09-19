
// variables 

var iconYoutube = idQuery('.iconYoutube')
var iconFacebook = idQuery('.iconFacebook')
var iconTwitter = idQuery('.iconTwitter')
var iconImstagram = idQuery('.iconImstagram')
var iconWhatsapp = idQuery('.iconWhatsapp')

var mainModal = idQuery('.main-modal')
var titleModal = idQuery('.modal-box__title')
var imgModal = idQuery('.modal-box__img')
var descpModal = idQuery('.modal-box__desc')
var btnCloseModal = idQuery('.modal-box__close')

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

// event youtube

iconYoutube.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "HM Tech")
    setImageModal(imgModal, "../img/myPhotoYoutube.jpg")
    descpModal.innerHTML = 'Este canal tiene como propòsito enseñar y otorgar los conocimientos necesarios en el mundo del Desarrollo Web. <a href="https://www.youtube.com/channel/UCDT1DvPPMn2Gk6Nc1EH74Qw?view_as=subscriber" target="_blank" class="modal-box__link">Go</a>' 
})


// event facebook

iconFacebook.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "Hairton Mayhuay")
    setImageModal(imgModal, "../img/myPhotoFacebook.jpg")
    descpModal.innerHTML = 'Enseñar es una de las cualidades más importantes y sobresalientes. <a href="https://www.facebook.com/hairtonM.Web?ref=bookmarks" target="_blank" class="modal-box__link">Go</a>'
})

// event twitter

iconTwitter.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "@hairton")
    setImageModal(imgModal, "../img/myPhotoTwitter.jpg")
    descpModal.innerHTML = 'Autodidacta y Apasionado por enseñar todo sobre el mundo del desarrollo web. <a href="https://twitter.com/hairton70758153" target="_blank" class="modal-box__link">Go</a>'
})

// event Imstagram

iconImstagram.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "hairton_mayhuay")
    setImageModal(imgModal, "../img/myPhotoImstagram.jpg")
    descpModal.innerHTML = 'Apasionado por el diseño, autodidacta en el modelamiento y desarrollo de websites.  <a href="https://www.instagram.com/htm_css_js_hairton/?hl=en" target="_blank" class="modal-box__link">Go</a>'
})

// event Whatsapp

iconWhatsapp.addEventListener('click', () => {
    hideModal(mainModal)
    setTitlelModal(titleModal, "Hairton M.")
    setImageModal(imgModal, "../img/whatsapp.png")
    descpModal.innerHTML = 'Hola, Mucho gusto, Escribeme a mi Whatsapp Personal (+51 920-803-441)  <a href="https://api.whatsapp.com/send?phone=51920803441&text=Hola! Mucho gusto%20quisiera%20contactarte" target="_blank" class="modal-box__link">Go</a>'
})