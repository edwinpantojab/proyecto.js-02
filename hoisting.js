// ! El hoisting en JavaScript se refiere al comportamiento de mover las declaraciones de variables y funciones al principio del ámbito actual en el que se encuentran, independientemente de donde se hayan definido originalmente. Esto significa que una variable o función puede ser utilizada antes de ser declarada sin provocar un error.

// ? Por ejemplo, consideremos el siguiente código:

console.log(x);
var x = 5;

// ? Aunque la variable x no está declarada antes de ser utilizada en la primera línea, este código no genera un error. Esto se debe a que durante la fase de compilación de JavaScript, la declaración de la variable x se mueve al principio del ámbito actual, lo que significa que x se declara antes de ser utilizada.

// El hoisting también se aplica a las funciones. Por ejemplo, consideremos el siguiente código:

foo();
function foo() {
  console.log("Hola, soy foo!");
}

// ? Aunque la función foo se llama antes de ser declarada, este código no genera un error. Esto se debe a que la declaración de la función se mueve al principio del ámbito actual durante la fase de compilación.

// ? Sin embargo, es importante tener en cuenta que el hoisting solo mueve las declaraciones, no las inicializaciones. Por ejemplo, consideremos el siguiente código:

console.log(x);
var x = 5;

// ? Aunque x se declara en la primera línea, no se inicializa hasta la segunda línea, lo que significa que en la primera línea, x tiene el valor undefined.

// ? En resumen, el hoisting en JavaScript se refiere al comportamiento de mover las declaraciones de variables y funciones al principio del ámbito actual durante la fase de compilación, lo que significa que una variable o función puede ser utilizada antes de ser declarada sin provocar un error. A continuación, se muestran algunos ejemplos adicionales de cómo funciona el hoisting:

// Ejemplo 1
console.log(x); // undefined
var x = 5;

// Ejemplo 2
var y = 10;
function bar() {
  console.log(y); // undefined
  var y = 15;
}
bar();

// Ejemplo 3
function baz() {
  console.log(a); // undefined
  var a = 20;
}
baz();

// ? En el primer ejemplo, x se declara después de ser utilizada, lo que significa que en la primera línea, x tiene el valor undefined. En el segundo ejemplo, la variable y se declara en el ámbito global y se inicializa en 10, pero dentro de la función bar, se declara otra variable y que se inicializa en 15. Como se ha mencionado anteriormente, durante la fase de compilación, la declaración de y dentro de la función bar se mueve al principio del ámbito actual, lo que significa que en la primera línea dentro de la función bar, y tiene el valor undefined. En el tercer ejemplo, la variable a se declara y se inicializa dentro de la función baz, y como se ha mencionado anteriormente, su declaración se mueve al principio del ámbito actual durante la fase de compilación.






