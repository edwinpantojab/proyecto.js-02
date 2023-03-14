// En JavaScript, una clase es una plantilla para crear objetos. Define un conjunto de propiedades y métodos que los objetos creados a partir de ella tendrán. Los métodos son funciones que están asociadas a una clase y pueden ser llamados en objetos creados a partir de ella.

// Para crear una clase en JavaScript, se utiliza la sintaxis de declaración de clase, que se introdujo en ES6. La sintaxis es la siguiente:

class MiClase {
    constructor(parametros) {
      this.propiedad = valor;
    }
  
    metodo1(parametros) {
      // Código del método
    }
  
    metodo2(parametros) {
      // Código del método
    }
  }

//   Aquí, MiClase es el nombre de la clase y constructor es un método especial que se llama cuando se crea un objeto a partir de la clase. Los parámetros pasados al constructor son los valores que se utilizan para inicializar las propiedades del objeto. metodo1 y metodo2 son métodos de la clase.

// Para crear un objeto a partir de una clase, se utiliza la palabra clave new seguida del nombre de la clase y los parámetros para el constructor:

let objeto = new MiClase(parametros);

// Algunos métodos especiales que se pueden utilizar en una clase son:

// constructor: Este es un método especial que se llama cuando se crea un objeto a partir de la clase. Se utiliza para inicializar las propiedades del objeto.

// static: Este es un modificador que se utiliza para crear métodos estáticos de la clase. Estos métodos son llamados en la propia clase, no en los objetos creados a partir de ella.

// get: Este es un modificador que se utiliza para crear métodos que actúan como propiedades de la clase. Se llaman como si fueran propiedades, pero en realidad son funciones que se ejecutan para obtener el valor de la propiedad.

// set: Este es un modificador que se utiliza para crear métodos que actúan como propiedades de la clase. Se llaman como si fueran propiedades, pero en realidad son funciones que se ejecutan para establecer el valor de la propiedad.

// Aquí hay un ejemplo de cómo se pueden utilizar algunos de estos métodos:

class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    get info() {
      return `${this.nombre} tiene ${this.edad} años.`;
    }
  
    set nuevaEdad(edad) {
      if (edad < 0) {
        console.error("La edad no puede ser negativa.");
        return;
      }
      this.edad = edad;
    }
  
    static saludo() {
      console.log("Hola!");
    }
  }
  
  let persona = new Persona("Juan", 25);
  console.log(persona.info); // "Juan tiene 25 años."
  
  persona.nuevaEdad = 30;
  console.log(persona.info); // "Juan tiene 30 años."
  
  Persona.saludo(); // "Hola!"
  

//   En este ejemplo, Persona es una clase que tiene una propiedad nombre y edad que se inicializan en el constructor. También tiene un método info que actúa como una propiedad de solo lectura, y un método nuevaEdad que actúa como una propiedad de escritura. La clase