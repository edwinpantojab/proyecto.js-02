// En JavaScript, la estructura de control do-while se utiliza para crear un bucle que ejecuta un bloque de código al menos una vez, y luego continúa ejecutando el bloque mientras se cumple una determinada condición.

// La sintaxis de do-while en JavaScript es la siguiente:

do {
    // bloque de código a ejecutar
  } while (condición);

//   En primer lugar, el bloque de código dentro de las llaves se ejecuta una vez, antes de que se evalúe la condición. Luego, si la condición es verdadera, el bloque se ejecuta de nuevo, y así sucesivamente hasta que la condición sea falsa.

// Es importante tener en cuenta que, a diferencia de la estructura de control while, la estructura do-while ejecuta el bloque de código al menos una vez, incluso si la condición es falsa desde el principio.

// A continuación, te presento algunos ejemplos de uso de la estructura de control do-while en JavaScript:

// Ejemplo 1: Imprimir los números del 1 al 10 utilizando do-while

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 10);

// Este código inicializa una variable i con el valor 1, y luego ejecuta un bucle do-while que imprime el valor de i y lo incrementa en 1 hasta que i llega a ser mayor que 10.

// Ejemplo 2: Pedir al usuario que ingrese una contraseña hasta que la ingrese correctamente

let password;

do {
  password = prompt("Introduzca su contraseña:");
} while (password !== "secreto");

console.log("¡Contraseña correcta!");

// En este ejemplo, se utiliza la estructura do-while para pedirle al usuario que ingrese una contraseña utilizando el método prompt(). Si la contraseña ingresada es incorrecta, el bucle se repite y le pide al usuario que ingrese otra contraseña. Si la contraseña es correcta, el bucle se detiene y se imprime un mensaje de éxito en la consola.

// Ejercicio: Sumar los números del 1 al 100 utilizando do-while

let i1 = 1;
let suma = 0;

do {
  suma += i;
  i++;
} while (i <= 100);

console.log(suma);

//En este ejercicio, se utiliza la estructura do-while para sumar los números del 1 al 100. Se inicializa una variable i con el valor 1, una variable suma con el valor 0, y luego se ejecuta un bucle que suma el valor de i a suma y lo incrementa en 1 hasta que i llega a ser mayor que 100. Finalmente, se imprime el valor de suma en la consola.

// Ejemplo 3: Validar una entrada de usuario

let input1;
do {
  input = prompt("Ingresa un número mayor que 10:");
} while (input <= 10 || isNaN(input));

// Este código pedirá al usuario que ingrese un número hasta que ingrese un número mayor que 10 y que sea un valor numérico.

// Ahora, veamos algunos ejercicios para practicar el uso del bucle do-while en JavaScript:

// Ejercicio 1: Imprimir los números del 1 al 10 en orden inverso

let i2 = 10;
do {
  console.log(i);
  i--;
} while (i >= 1);

//Ejercicio 2: Pedir al usuario que ingrese un número entre 1 y 100

let input;
do {
  input = prompt("Ingresa un número entre 1 y 100:");
} while (input < 1 || input > 100 || isNaN(input));

//Ejercicio 3: Calcular la suma de los números del 1 al 50

let i3 = 1;
let sum = 0;
do {
  sum += i;
  i++;
} while (i <= 50);
console.log(sum);