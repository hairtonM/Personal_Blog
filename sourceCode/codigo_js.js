
/* 

TRAIGO TODAS LA FUNCIONES Y METODOS QUE TIENE LA LIBRERIA JOHNNY-FIVE Y LAS ALMACENO 
EN 3 CONSTANTES (Board, Proximity y Led)

Board: Placa Arduino
Proximity: Para el sensor de distancia 
Led: Para los Leds

*/

const {Board, Proximity, Led} = require("johnny-five");
const board = new Board(); // objeto de la clase Board


board.on("ready", sensorDistance);


function sensorDistance()
{

	const led_1 = new Led(9); // pin 9  de arduino para el led_1
	const led_2 = new Led(10); // pin 1 de arduino para el led_2
	const led_3 = new Led(11); // pin 11 de arduino para el led_2

	// creo un objeto proximity de la clase Proximity() la cual tiene 3 
	// parámetros el controlador, el numero del pin arduino, y 
	// la frequencia en que se medira los datos
	
	
	const proximity = new Proximity ({ 
		controller: "HCSR04", // especifico el controlador
		pin: 8, // pin por donde se recibiran los datos
		freq: 1000 // frequencia de los datos
	});


	// en la constante proximity le otorgo una función (showMeasures), 
	// la cual se ejecuta cuando los centimetros cambien (data)

	proximity.on("data", showMeasures)

	// creando la función showMeasures

	function showMeasures()
	{
		const {cm} = proximity;

		console.log("Proximity:  ");
		console.log("  cm  :  ", cm);
		console.log("---------------");

		// con el método within defino un rango en el cual se enciende el 
		// led_1 y se apaga el led_2 y viceversa

		proximity.within([1, 9], "cm", () => {
			led_1.stop().off();
			led_2.stop().off();
			led_3.stop().off();
		});

		proximity.within([10, 29], "cm", () => {
			led_1.blink(1000);
			led_2.stop().off();
			led_3.stop().off();
		});

		proximity.within([30, 49], "cm", () => {
			led_1.stop().off();
			led_2.blink(1000);
			led_3.stop().off();
		});

		proximity.within([50, 70], "cm", () => {
			led_1.stop().off();
			led_2.stop().off();
			led_3.blink(1000);
		});
	}
}

