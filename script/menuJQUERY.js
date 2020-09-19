

// este snippte o fragmento va al final de los script en html 

// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


/* HACIENDO USO DEL FRAMEWORK DE JS LLAMADO JQUERY PARA MI MENÙ DE NAVEGACIÒN */

$( document ).ready( () => {
    log("Pàgina lista")

    /* esta sentencia aplica para el menù en general */

    $( "#switch-menu" ).click( () => {
        /*$( "#back-menu" ).toggleClass("notShowNav")*/
        $( "#back-menu" ).toggle("slow", () => {
            log("Evento toggle el cual me permite mostrar y ocultar elementos coincidentes")
        })
    })

    /* esta sentencia aplica para el segundo nivel dentro del menù */

    $( "#one-id-nav" ).click( () => {
        $( "#id-one-second-body-nav" ).slideToggle("slow", () => {
            log("Primer nivel mostrado")
        })
    })

    $( "#two-id-nav" ).click( () => {
        $( "#id-two-second-body-nav" ).slideToggle("slow", () => {
            log("Segundo nivel mostrado")
        })
    })
})

