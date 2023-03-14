// En JavaScript, la palabra clave "this" se refiere al objeto actual en el que se está ejecutando el código. Es decir, "this" se refiere al objeto que está "poseyendo" la función que se está ejecutando en ese momento.

// Hay varias formas de utilizar "this" en JavaScript, aquí hay algunos ejemplos:

// En una función normal: Dentro de una función normal, "this" se refiere al objeto que llama a la función. Por ejemplo:

function miFuncion() {
    console.log(this);
  }
  
  miFuncion(); // En este caso, "this" se refiere al objeto global (window en un navegador).

  //En un objeto: Dentro de un objeto, "this" se refiere al objeto en sí mismo. Por ejemplo:

  const miObjeto1 = {
    nombre: "Juan",
    edad: 30,
    saludar() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  
  miObjeto.saludar(); // En este caso, "this" se refiere al objeto "miObjeto".

//   Utilizando "call", "apply" o "bind": Estos métodos se utilizan para cambiar el valor de "this" en una función. Por ejemplo:

  const miObjeto = {
    nombre: "Juan",
    edad: 30
  }
  
  function saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
  
  saludar.call(miObjeto); // Utilizando "call", "this" se refiere a "miObjeto".

//   Es importante tener en cuenta que el valor de "this" puede cambiar dependiendo de cómo se llama a una función. Por lo tanto, es recomendable prestar atención al contexto en el que se está utilizando "this" para evitar errores en el código.