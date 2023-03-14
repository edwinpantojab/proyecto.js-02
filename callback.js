// En JavaScript, un callback es una función que se pasa como argumento a otra función y que se ejecutará después de que se complete la operación principal de la función original. Los callbacks son muy útiles en situaciones donde no se sabe exactamente cuándo se completará una tarea o cuando se requiere un comportamiento asíncrono.

// Aquí hay un ejemplo simple de una función que toma un callback como argumento:

function ejecutarCallback(callback) {
    console.log("Ejecutando función principal...");
    callback();
  }
  
  function miCallback() {
    console.log("Callback ejecutado!");
  }
  
  ejecutarCallback(miCallback);

//   En este ejemplo, la función ejecutarCallback toma un callback como argumento y lo ejecuta después de imprimir un mensaje en la consola. La función miCallback simplemente imprime otro mensaje en la consola. Cuando se llama a ejecutarCallback con miCallback como argumento, primero se imprimirá "Ejecutando función principal...", seguido de "Callback ejecutado!".

// Aquí hay otro ejemplo más práctico que utiliza callbacks para hacer una solicitud HTTP asíncrona utilizando la API Fetch de JavaScript:

function hacerSolicitud(url, callback) {
    fetch(url)
      .then(response => response.json())
      .then(data => callback(data))
      .catch(error => console.error(error));
  }
  
  function miCallback(data) {
    console.log(data);
  }
  
  hacerSolicitud("https://api.example.com/data", miCallback);

//   En este ejemplo, la función hacerSolicitud toma una URL y un callback como argumentos. La función utiliza la API Fetch para realizar una solicitud HTTP asíncrona y luego llama al callback con los datos obtenidos. La función miCallback simplemente imprime los datos en la consola. Cuando se llama a hacerSolicitud con la URL y miCallback como argumentos, se realizará una solicitud HTTP asíncrona y cuando se complete, se imprimirán los datos en la consola.

// En resumen, los callbacks son una herramienta poderosa en JavaScript que permiten que el código asíncrono sea más fácil de leer y manejar. Cuando se usan correctamente, pueden hacer que el código sea más modular y fácil de mantener.

// En JavaScript, una función de callback es una función que se pasa como argumento a otra función y que se llama dentro de esa función. Es una forma común de hacer que las funciones asincrónicas trabajen en conjunto con otras funciones.

// Para entender mejor cómo funciona una función de callback, es útil conocer la naturaleza de JavaScript como un lenguaje asíncrono. En JavaScript, algunas funciones tardan más en completarse que otras, y esas funciones asíncronas se ejecutan en segundo plano, mientras que el código que las llama continúa ejecutándose. Esto significa que cuando una función asíncrona termina, el resultado puede no estar disponible inmediatamente.

// En lugar de esperar el resultado de una función asíncrona, se utiliza una función de callback para que la función asíncrona llame a la función de callback una vez que se haya completado su trabajo. La función de callback se puede utilizar para procesar el resultado de la función asíncrona.

// Veamos un ejemplo de cómo se utiliza una función de callback en JavaScript:

function getUserData(userId, callback) {
    // Simular una solicitud a una API que tarda en responder
    setTimeout(() => {
      const userData = { id: userId, name: 'John Doe', email: 'john@example.com' };
      callback(userData);
    }, 2000); // Esperar dos segundos antes de llamar al callback
  }
  
  getUserData(123, (userData) => {
    console.log(userData);
  });

//   En este ejemplo, la función getUserData tarda dos segundos en simular una solicitud a una API. En lugar de esperar dos segundos para que la función termine, se pasa una función de callback como segundo argumento a la función getUserData. Cuando la función getUserData termina, llama a la función de callback y le pasa los datos del usuario.

// En el ejemplo, la función de callback simplemente imprime los datos del usuario en la consola.

// Aquí hay otro ejemplo de cómo se puede utilizar una función de callback para procesar los resultados de una función asíncrona:

function multiplyNumbers(numbers, callback) {
    const multipliedNumbers = numbers.map((num) => num * 2);
    callback(multipliedNumbers);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  
  multiplyNumbers(numbers, (multipliedNumbers) => {
    console.log(multipliedNumbers);
  });

//   En este ejemplo, la función multiplyNumbers toma una matriz de números y devuelve una nueva matriz con cada número multiplicado por dos. En lugar de devolver la nueva matriz directamente, la función toma una función de callback como segundo argumento y le pasa la nueva matriz como argumento.

// En el ejemplo, la función de callback simplemente imprime la nueva matriz en la consola.

// Ahora que hemos visto algunos ejemplos de cómo se utiliza una función de callback en JavaScript, aquí hay un ejercicio para que practiques:

// Ejercicio:
// Escribe una función que acepte una matriz de nombres y una función de callback. La función debe agregar un signo de admiración al final de cada nombre en la matriz y pasar la nueva matriz a la función de callback. La función de callback debe imprimir la nueva matriz en la consola

function addExclamation(names, callback) {
    const namesWithExclamation = names.map((name) => name + '!');
    callback(namesWithExclamation);
  }
  
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  
  addExclamation(names, (namesWithExclamation) => {
    console.log(namesWithExclamation);})

//     En este ejemplo, la función calcularSuma toma dos números y una función de "callback". La función suma los dos números y luego invoca la función de "callback" con el resultado.

// Luego, la función calcularSuma se llama con los números 2 y 3, así como una función de "callback" que simplemente imprime el resultado en la consola.

// Cuando se ejecuta el código, la función calcularSuma suma los dos números y luego invoca la función de "callback" con el resultado. La función de "callback" imprime el resultado en la consola, que en este caso es "El resultado de la suma es: 5".

    function calcularSuma(a, b, callback) {
        const resultado = a + b;
        callback(resultado);
      }
      
      calcularSuma(2, 3, function(resultado) {
        console.log('El resultado de la suma es: ' + resultado);
      });

    //   Aquí hay otro ejemplo que muestra cómo podemos utilizar las funciones de "callback" para manejar errores en JavaScript:

      function dividir(a, b, callback) {
        if (b === 0) {
          callback('No se puede dividir por cero', null);
        } else {
          const resultado = a / b;
          callback(null, resultado);
        }
      }
      
      dividir(10, 2, function(error, resultado) {
        if (error) {
          console.log('Error: ' + error);
        } else {
          console.log('El resultado de la división es: ' + resultado);
        }
      });
      
      dividir(10, 0, function(error, resultado) {
        if (error) {
          console.log('Error: ' + error);
        } else {
          console.log('El resultado de la división es: ' + resultado);
        }
      });

//       En este ejemplo, la función dividir toma dos números y una función de "callback". Si el segundo número es cero, la función de "callback" se llama con un mensaje de error. De lo contrario, la función calcula el resultado de la división y llama a la función de "callback" con el resultado.

// Luego, la función dividir se llama dos veces: una vez con los números 10 y 2, y otra vez con los números 10 y 0. La primera llamada a la función de "callback" imprime "El resultado de la división es: 5". La segunda llamada a la función de "callback" imprime "Error: No se puede dividir por cero".

// En resumen, las funciones de "callback" son una forma poderosa de escribir código asíncrono en JavaScript. Nos permiten manejar tareas que pueden tomar tiempo y nos permiten manejar errores de manera efectiva. Con la práctica, 