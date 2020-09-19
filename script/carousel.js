/* 
    THIS SCRIPT GIVE ME CONTROL MY ACORDION INFO 
*/


// variables

var i = 0
var slideIndex = 0

// functions 

const showSlides = () => {
    
    var divSlides = idQueryAll('.slides')

    // hide all div cards 
    
    for(i=0; i<divSlides.length; i++){
        divSlides[i].style.display = "none"
    }

    slideIndex++

    if(slideIndex > divSlides.length){ slideIndex = 1}

    divSlides[slideIndex - 1].style.display = "flex"

    setTimeout(showSlides, 4000)
}


// events 

showSlides()
