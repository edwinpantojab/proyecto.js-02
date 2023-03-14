
// En JavaScript, el bucle "for" es una estructura de control de flujo que permite repetir un bloque de código varias veces. Hay tres tipos principales de bucles "for" en JavaScript: "for", "for in" y "for of". Aquí están algunos ejemplos de cada tipo de bucle:

// Bucle "for"
// El bucle "for" es el tipo más común de bucle en JavaScript. Se utiliza para ejecutar un bloque de código un número específico de veces.

// Ejemplo:

for (let i = 0; i < 5; i++) {
  console.log(i);
}

//Salida:

0
1
2
3
4

// En este ejemplo, el bucle "for" ejecuta el bloque de código cinco veces, comenzando en 0 y terminando en 4.

// Bucle "for in"
// El bucle "for in" se utiliza para iterar sobre las propiedades de un objeto. Cada iteración del bucle devuelve una propiedad diferente del objeto.

//Ejemplo:

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (const prop in person) {
  console.log(`${prop}: ${person[prop]}`);
}

// Salida:

// name: John
// age: 30
// city: New York

// En este ejemplo, el bucle "for in" recorre todas las propiedades del objeto "person" y muestra cada propiedad junto con su valor.

// Bucle "for of"
// El bucle "for of" se utiliza para iterar sobre elementos de un objeto iterable, como un arreglo.

// Ejemplo:

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  console.log(num);
}

//Salida:

1
2
3
4
5

// En este ejemplo, el bucle "for of" itera sobre cada elemento del arreglo "arr" y muestra cada elemento.

// En JavaScript, el bucle "for" es una estructura de control que permite repetir un bloque de código varias veces, mientras se cumple una determinada condición. Hay varios métodos de for disponibles en JavaScript, incluyendo:

// for: Este es el método de for más básico, que se utiliza para iterar sobre una serie de elementos o ejecutar un bloque de código un número determinado de veces. La sintaxis es la siguiente:

// for (inicialización; condición; expresión final) {
//     // Código a ejecutar
// }

// Por ejemplo, el siguiente código utiliza el método "for" para imprimir los números del 1 al 5:

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// for...in: Este método se utiliza para iterar sobre las propiedades de un objeto JavaScript. La sintaxis es la siguiente:

for (variable in objeto) {
    // Código a ejecutar
}

// Por ejemplo, el siguiente código utiliza el método "for...in" para imprimir las propiedades de un objeto llamado "persona":

const persona = {nombre: "Juan", edad: 30, ciudad: "Madrid"};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}

// for...of: Este método se utiliza para iterar sobre los elementos de un objeto iterable (como un array o una cadena de texto). La sintaxis es la siguiente:

for (variable of objetoIterable) {
    // Código a ejecutar
}

// Por ejemplo, el siguiente código utiliza el método "for...of" para imprimir los elementos de un array llamado "numeros":

const numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}

// forEach: Este método se utiliza para iterar sobre los elementos de un array, ejecutando una función para cada elemento. La sintaxis es la siguiente:

array.forEach(function(elemento, indice) {
    // Código a ejecutar
});

//Por ejemplo, el siguiente código utiliza el método "forEach" para imprimir los elementos de un array llamado "frutas":

const frutas = ["manzana", "naranja", "plátano", "kiwi"];
frutas.forEach(function(fruta, indice) {
    console.log(indice + ": " + fruta);
});


