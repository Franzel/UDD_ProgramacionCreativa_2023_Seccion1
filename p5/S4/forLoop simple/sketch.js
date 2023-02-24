/*
Este código demuestra el uso de una función que es creada especialmente.
 La función tiene un "return", lo que significa que "devuelve" algo,
 en este caso devuelve un número o resultado luego de hacer una operación matemática
 entre dos números.
 
 Nótese que esta función recibe parámetros (float num1, float num2)
 Eso significa que necesita que le demos 2 float cuando la llamamos
 */

var alpaca; //declaramos una variable tipo var 
var camello;  //declaramos una variable tipo var
var guanaco;  //declaramos una variable tipo var

function setup() {
  //Llamamos a la función, y nótese como le entregamos 2 números cada vez que se llama
  alpaca  = calcula(20, 10.5);
  camello = calcula(-120, 26);
  guanaco = calcula(-5, 5);

  print(alpaca);
  print(camello);
  print(guanaco);
}

function draw() {
}

/*
Ver abajo: El 'return' hace que se entregue un resultado hacia afuera de la función
Importante notar que cuando usamos 'return' tenemos que especificar el tipo de data
En este caso vean que la función es del tipo 'float' (y no function como suele ser)
Eso es porque el resultado final va a ser un float, que obtenemos con el 'return'
*/

function calcula(num1, num2) {
  //en este caso lo vamos a ocupar para sumar los dos numeros que recibe
  var r = num1 + num2;
  return r; 
}