// Un closure en JavaScript es una función que tiene acceso a las variables de su entorno lexical, incluso después de que esa función haya retornado. En otras palabras, el closure "recuerda" el ámbito léxico en el que se definió y puede acceder a las variables de ese ámbito, incluso cuando se ejecuta fuera de ese ámbito.

// Los closures son útiles en muchas situaciones, como por ejemplo:

// Mantener el estado de una variable entre múltiples llamadas de función.
// Crear funciones privadas que no pueden ser accedidas desde fuera del closure.
// Crear funciones que recuerdan el ámbito en el que fueron definidas, lo que puede ser útil para implementar patrones como el módulo.
// Aquí te presento algunos ejemplos de closures en JavaScript:

// Ejemplo 1: Mantener el estado de una variable entre múltiples llamadas de función.

function contador() {
    let count = 0;
    return function() {
      count++;
      console.log(count);
    }
  }
  
  const incrementar = contador();
  incrementar(); // Output: 1
  incrementar(); // Output: 2
  incrementar(); // Output: 3

//   En este ejemplo, la función contador() retorna otra función que incrementa un contador interno y lo muestra por consola. Cada vez que se llama a la función interna, el contador se incrementa y se muestra su valor actual. Como el contador está definido en el ámbito lexical de la función contador(), la función interna mantiene acceso a ese contador incluso después de que la función contador() haya retornado.

// Ejemplo 2: Crear funciones privadas que no pueden ser accedidas desde fuera del closure.

function miModulo() {
    let privado = "Soy privado";
    function publico() {
      console.log(privado);
    }
    return {
      publico: publico
    }
  }
  
  const miMod = miModulo();
  miMod.publico(); // Output: "Soy privado"
  console.log(miMod.privado); // Output: undefined

//   En este ejemplo, la función miModulo() retorna un objeto con una propiedad publico que contiene una función que muestra la variable privado. Como privado está definido en el ámbito lexical de la función miModulo(), la función publico() mantiene acceso a esa variable incluso después de que la función miModulo() haya retornado. Debido a que privado no es una propiedad del objeto retornado, no puede ser accedido directamente desde fuera del closure.

// Ejemplo 3: Crear funciones que recuerdan el ámbito en el que fueron definidas.

function crearSumador(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const sumar5 = crearSumador(5);
  const sumar10 = crearSumador(10);
  
  console.log(sumar5(2));  // Output: 7
  console.log(sumar10(2)); // Output: 12

//   En este ejemplo, la función crearSumador() retorna otra función que suma un valor y al valor x pasado como argumento. Al llamar a crearSumador(5) y crearSumador(10), se crean dos funciones que recuerdan los valores 5 y 10 respectivamente. Estas funciones pueden ser llamadas posteriormente con un valor y, que se suma al valor

// Los closures son útiles para crear funciones que actúan como fábricas de otras funciones. Por ejemplo, si queremos crear varias funciones que realicen operaciones matemáticas con un número fijo, podemos crear una función que devuelva una función con ese número fijo como argumento.

// Aquí hay un ejemplo de closure en JavaScript:

function multiplicaPor(numero) {
    return function(x) {
      return numero * x;
    };
  }
  
  const multiplicaPorDos = multiplicaPor(2);
  console.log(multiplicaPorDos(5)); // Output: 10

//   En este ejemplo, la función multiplicaPor devuelve una función anónima que multiplica el argumento pasado a multiplicaPor por el número dado. Luego, se crea una nueva función llamada multiplicaPorDos que se genera llamando a multiplicaPor con un argumento de 2. Cuando se llama a multiplicaPorDos con un argumento de 5, devuelve 10.

//   Crear una función que genere una secuencia de números enteros consecutivos y retorne el siguiente número cada vez que se llama.

  function generador() {
    var num = 0;
    return function() {
      num++;
      return num;
    }
  }
  
  var siguienteNum = generador();
  console.log(siguienteNum()); // output: 1
  console.log(siguienteNum()); // output: 2
  console.log(siguienteNum()); // output: 3

//   En este ejemplo, la función generador retorna una función interna que tiene acceso a la variable num definida en su entorno padre. La función interna incrementa el número num en 1 cada vez que se llama y retorna el resultado actualizado.

// Espero que esto te haya ayudado a entender los closures en JavaScript y cómo se pueden utilizar en algunos ejemplos prácticos.