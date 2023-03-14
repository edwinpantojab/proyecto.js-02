// El bucle while es una estructura de control de flujo en JavaScript que permite repetir un bloque de código mientras una condición sea verdadera. La sintaxis básica del bucle while es la siguiente:

while (condición) {
    // Código a ejecutar mientras la condición sea verdadera
  }

//   La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la condición es verdadera, el bloque de código dentro del bucle se ejecutará. Si la condición es falsa, el bucle terminará y la ejecución continuará con el código que sigue al bucle.

//   Veamos algunos ejemplos para entender mejor cómo funciona el bucle while en JavaScript:
  
//   Ejemplo 1: Contar hasta 5
//   En este ejemplo, usaremos un bucle while para contar desde 1 hasta 5:

  let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// En este caso, la condición i <= 5 se evaluará como verdadera mientras el valor de i sea menor o igual a 5. En cada iteración del bucle, imprimimos el valor de i en la consola y luego incrementamos i en 1 con la expresión i++. El resultado de este código será:

1
2
3
4
5

// Ejemplo 2: Adivina el número
// En este ejemplo, usaremos un bucle while para pedir al usuario que adivine un número secreto:

const numeroSecreto = 42;
let adivinado = false;

while (!adivinado) {
  const respuesta = prompt("Adivina el número secreto:");
  if (respuesta === null) {
    break;
  }
  const numero = parseInt(respuesta);
  if (numero === numeroSecreto) {
    alert("¡Correcto!");
    adivinado = true;
  } else {
    alert("Incorrecto, intenta de nuevo.");
  }
}

// En este caso, la condición !adivinado se evaluará como verdadera mientras la variable adivinado sea falsa. En cada iteración del bucle, pedimos al usuario que adivine el número secreto con la función prompt. Si el usuario cancela el cuadro de diálogo, salimos del bucle con la sentencia break. Si el usuario ingresa un número, lo convertimos a un valor entero con la función parseInt y lo comparamos con el número secreto. Si el usuario adivina correctamente, mostramos un mensaje de éxito con la función alert y establecemos la variable adivinado en true para salir del bucle. Si el usuario no adivina correctamente, mostramos un mensaje de error y continuamos con la siguiente iteración del bucle.

// Ejemplo 3: Generar números aleatorios
// En este ejemplo, usaremos un bucle while para generar un conjunto de números aleatorios hasta que encontremos un número mayor que 0.9:

let numer;
while (true) {
  numero = Math.random();
  console.log(numero);
  if (numero > 0.9) {
    break;
  }
}

// En este caso, usamos true como condición para que el bucle se ejecute indefin

// Ejemplo 2: Pedir al usuario que ingrese un número y seguir pidiendo hasta que ingrese un número válido

let numero;

while (isNaN(numero)) {
  numero = parseInt(prompt("Ingrese un número válido"));
}

console.log("El número ingresado es: " + numero);

// En este ejemplo, se utiliza el método isNaN para comprobar si la variable numero no es un número. Dentro del bloque de while, se solicita al usuario que ingrese un número mediante un cuadro de diálogo prompt. Si el valor ingresado no es un número, el bucle continúa repitiéndose. Cuando el usuario ingresa un número válido, la condición se vuelve falsa y el bucle se detiene. Finalmente, se imprime el número ingresado en la consola.

// Ejemplo 3: Calcular la suma de los números del 1 al 10 utilizando while

let a = 1;
let suma = 0;

while (a <= 10) {
  suma += i;
  a++;
}

console.log("La suma de los números del 1 al 10 es: " + suma);

// En este ejemplo, se inicializa una variable i con el valor 1 y una variable suma con el valor 0. El bucle while se ejecuta mientras i sea menor o igual a 10. Dentro del bloque de while, se suma el valor de i a la variable suma y se incrementa i en 1 en cada iteración. Al final del bucle, se imprime la suma en la consola.

// La salida en la consola sería:

// La suma de los números del 1 al 10 es: 55

// Estos son solo algunos ejemplos de cómo se puede utilizar el bucle while en JavaScript. En general, el bucle while es útil cuando se desea repetir un bloque de código mientras se cumple una condición específica. Es importante tener en cuenta que si la condición nunca se vuelve falsa, el bucle se seguirá ejecutando