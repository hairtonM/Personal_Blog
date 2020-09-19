// variables

int relay = 7;
const int trigger = 2;
const int echo = 3;
int led_1 = 8;
int led_2 = 9;
int led_3 = 10;
int estado = true;

void setup() 
{
  Serial.begin(9600); // inicialización de la comunicación 
  pinMode(trigger, OUTPUT); //  emite el pulso de sonido como salida 
  pinMode(echo, INPUT); // recibe el tiempo de demora en que el sonido retorna
  digitalWrite(trigger, LOW); // inicializo el pin con 0 para que aún no emita la señal
  pinMode(relay, OUTPUT); // el relay va a ser de salida 
  pinMode(led_1, OUTPUT); 
  pinMode(led_2, OUTPUT);
  pinMode(led_3, OUTPUT);
}

void loop()
{
  long tiempo = 0; // calculo el tiempo que le toma al sonido llegar hasta el objeto y regresar
  long distancia = 0; // calculo la distancia utilizando la formula v = d / t donde v = 343m/s pero se debe convertir de metros a cm y de segundos a // us por lo cual sale 1 cm / 29.2 us

  digitalWrite(trigger, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigger, LOW);

  /* CALCULO EL TIEMPO PARA APARTIR DE ELLO CALCULAR LA DISTANCIA  */

  tiempo = pulseIn(echo, HIGH); // es una función que retorna el valor de la longitud o distancia en microsegundos 206
  distancia = tiempo / 59;

   /* muestro la información de la distancia */
   
  Serial.println("Distancia: ");
  Serial.print(distancia);
  Serial.print(" cm");
  Serial.println("--------------------------");
  delay(1000);


  if(distancia >= 1 && distancia <= 10)
  {
    digitalWrite(relay, HIGH); // enciendo el motor
    digitalWrite(led_1, HIGH);
    digitalWrite(led_2, LOW);
    digitalWrite(led_3, LOW);
  }
  if(distancia >= 30 && distancia < 75)
  {
    digitalWrite(led_1, LOW);
    digitalWrite(led_2, HIGH);
    digitalWrite(led_3, LOW);
  }
  if(distancia >= 76)
  {
    digitalWrite(relay, LOW); // apago el motor
    digitalWrite(led_1, LOW);
    digitalWrite(led_2, LOW);
    digitalWrite(led_3, HIGH);
  }
}

