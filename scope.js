// ? En JavaScript, un scope o ámbito es la región de un programa donde una variable o función es accesible. El scope determina dónde una variable o función puede ser utilizada en un programa. En JavaScript, existen dos tipos de scope: el scope global y el scope local.

// ? El scope global se refiere al ámbito en el que una variable o función está disponible en todo el programa, mientras que el scope local se refiere al ámbito en el que una variable o función está disponible solo dentro de un bloque de código específico, como una función o un bloque de declaración.

// A continuación se muestran algunos ejemplos de scope en JavaScript:

// Ejemplo 1: Scope Global
var x = 10; // Variable global

function foo() {
  console.log(x); // x es accesible dentro de la función foo
}

foo();
console.log(x); // x es accesible fuera de la función foo

// Ejemplo 2: Scope Local
function bar() {
  var y = 5; // Variable local

  console.log(y); // y es accesible dentro de la función bar
}

bar();
console.log(y); // y NO es accesible fuera de la función bar, esto genera un error

// En el ejemplo 1, la variable x se declara en el ámbito global y se puede acceder tanto dentro como fuera de la función foo. En la función foo, la variable x se puede acceder porque es una variable global, por lo que está disponible en todo el programa.

// En el ejemplo 2, la variable y se declara dentro de la función bar, lo que la convierte en una variable local. La variable y solo es accesible dentro de la función bar, lo que significa que si intentamos acceder a ella fuera de la función, se generará un error.

// Es importante tener en cuenta que las variables globales pueden ser accedidas y modificadas desde cualquier parte del programa, lo que puede llevar a problemas de confusión y errores en el código. Por esta razón, se recomienda utilizar variables locales siempre que sea posible y evitar el uso de variables globales a menos que sea absolutamente necesario.

// ! En JavaScript, un scope (o ámbito) se refiere al alcance o contexto en el que una variable o función está disponible en un programa. El scope determina qué partes del código tienen acceso a una variable o función y en qué momento.

// Hay dos tipos de scopes en JavaScript: el scope global y el scope local.

// El scope global se refiere al ámbito en el que una variable o función está disponible en todo el programa. Esto significa que cualquier parte del código puede acceder a una variable o función declarada en el scope global. Por ejemplo:

// Declaración de variable en scope global
var nombre = "Juan";

function saludar() {
  console.log("Hola " + nombre + "!");
}

// Llamada a la función desde cualquier parte del código
saludar();

// En este ejemplo, la variable nombre y la función saludar() se declaran en el scope global, lo que significa que están disponibles en todo el programa.

// El scope local se refiere al ámbito en el que una variable o función está disponible solo en una parte específica del código, como una función o un bloque de código. Esto significa que una variable o función declarada en un scope local solo puede ser accedida desde ese scope y no desde otros scopes. Por ejemplo:

function sumar(a, b) {
    // Declaración de variable en scope local
    var resultado = a + b;
    console.log(resultado);
  }
  
  // Llamada a la función desde cualquier parte del código
  sumar(2, 3);

//   todo: En este ejemplo, la variable resultado se declara dentro de la función sumar(), lo que significa que solo está disponible dentro del scope local de la función.

// En resumen, el scope en JavaScript determina el alcance o contexto en el que una variable o función está disponible en un programa. El scope global se refiere al ámbito en el que una variable o función está disponible en todo el programa, mientras que el scope local se refiere al ámbito en el que una variable o función está disponible solo en una parte específica del código, como una función o un bloque de código. A continuación, se muestran algunos ejemplos adicionales de scopes en JavaScript:

// Ejemplo 1 - Scope global
var mensaje = "Hola mundo!";

function imprimirMensaje() {
  console.log(mensaje);
}

imprimirMensaje(); // "Hola mundo!"
console.log(mensaje); // "Hola mundo!"

// Ejemplo 2 - Scope local
function calcularPromedio(notas) {
  var total = 0;
  for (var i = 0; i < notas.length; i++) {
    total += notas[i];
  }
  // La variable i también está en scope local
  var promedio = total / notas.length;
  console.log("El promedio es " + promedio);
}

calcularPromedio([6, 7, 8]); // "El promedio es 7"
// console.log(promedio); // Generaría un error porque promedio está en scope local de la función calcularPromedio()

// Ejemplo 3 - Scope anidado
var nombre = "Juan";

function saludar() {
  // La variable nombre en este scope se refiere a la variable global
  console.log("Hola " + nombre + "!");
  
  function despedirse() {
    // La variable nombre en este scope se refiere a la variable local
    var nombre = "Pedro";
    console.log("Adiós " + nombre + "!");
  }
  
  despedirse();
}

saludar();