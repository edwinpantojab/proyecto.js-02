// En JavaScript, una función es un bloque de código que realiza una tarea específica y puede ser reutilizado varias veces en el programa. Una función puede aceptar argumentos y devolver un valor. Las funciones en JavaScript son objetos de primera clase, lo que significa que pueden ser asignadas a variables, pasadas como argumentos a otras funciones, y también pueden ser devueltas como valores de otras funciones.

// Aquí hay una sintaxis básica para definir una función en JavaScript:

function nombreFuncion(parametros) {
    // cuerpo de la función
    return valorDeRetorno;
  }

//   Donde "nombreFuncion" es el nombre que se le da a la función, "parametros" es una lista opcional de parámetros que la función acepta, el "cuerpo de la función" es el código que se ejecuta cuando la función es llamada, y "valorDeRetorno" es un valor que se devuelve al final de la función.

// Aquí hay un ejemplo de función simple que acepta dos parámetros y devuelve su suma:

function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Llamando a la función
  var resultado = sumar(2, 3);
  console.log(resultado); // Output: 5

//   En este ejemplo, la función "sumar" acepta dos parámetros "num1" y "num2" y devuelve la suma de ambos. La función es llamada con los argumentos 2 y 3, y el resultado de la función es almacenado en la variable "resultado" y luego se imprime en la consola.

// También es posible definir funciones anónimas en JavaScript, que no tienen un nombre específico. Aquí hay un ejemplo:

var multiplicar = function(num1, num2) {
    return num1 * num2;
  }
  
  // Llamando a la función
  var resultado = multiplicar(2, 3);
  console.log(resultado); // Output: 6

//   En este ejemplo, la función anónima se asigna a la variable "multiplicar" y se puede llamar de la misma manera que una función con nombre.

// También es posible definir funciones como métodos de objetos. Aquí hay un ejemplo:

var objeto = {
    nombre: "Juan",
    apellido: "Perez",
    nombreCompleto: function() {
      return this.nombre + " " + this.apellido;
    }
  };
  
  // Llamando a la función
  console.log(objeto.nombreCompleto()); // Output: "Juan Perez"

//   En este ejemplo, la función "nombreCompleto" es definida como un método del objeto "objeto". La función devuelve el nombre completo del objeto al concatenar su nombre y apellido. La función es llamada mediante la notación de punto "objeto.nombreCompleto()".

// En resumen, una función en JavaScript es un bloque de código que se puede reutilizar varias veces para realizar una tarea específica. Las funciones pueden aceptar argumentos y devolver valores. También pueden ser asignadas a variables, pasadas como argumentos a otras funciones, y devueltas como valores de otras funciones.

