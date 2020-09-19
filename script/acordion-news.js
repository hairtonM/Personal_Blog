/* 
    THIS SCRIPT GIVE ME CREATE A ARCODION NEWS FOR SEE THE INFORMATION
*/


// variables 

let buttonsActiveAcordion = idQueryAll('.acordion__button')
var i, j

// functions 

const switchDisplay = (elem) => {

    if(elem.style.display === "block"){
        elem.style.display = "none"
    }
    else{
        elem.style.display = "block"
    }
}

// events 

for(i=0; i < buttonsActiveAcordion.length; i++){
    buttonsActiveAcordion[i].addEventListener('click', function() {
        var panel = this.nextElementSibling // the next element HTML
        switchDisplay(panel) // show an hide acordion elements
        // log(panel)
    })
}

