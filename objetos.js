// En JavaScript, un objeto es una colección de propiedades, que a su vez son pares clave-valor. Los objetos pueden contener métodos, que son funciones que se definen dentro del objeto y se utilizan para realizar acciones en ese objeto. Los objetos se crean utilizando la sintaxis de llaves {} y los métodos se definen utilizando la sintaxis de funciones.

// Ejemplo de creación de objeto:

const persona = {
    nombre: 'Juan',
    edad: 30,
    saludar: function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
  };
  
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años

//   En este ejemplo, se crea un objeto persona con dos propiedades (nombre y edad) y un método (saludar). El método saludar utiliza la palabra clave this para referirse al objeto persona y acceder a sus propiedades.

// También es posible crear objetos utilizando la sintaxis de constructor de funciones, que se asemeja a la programación orientada a objetos.

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
  }
  
  //const persona = new Persona('Juan', 30);
  console.log(persona.nombre); // Juan
  console.log(persona.edad); // 30
  persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años

//   En este ejemplo, se define una función constructora Persona que crea un objeto persona con las mismas propiedades y método que en el ejemplo anterior. La palabra clave new se utiliza para crear una nueva instancia del objeto Persona.

// Los métodos pueden ser llamados utilizando la sintaxis de punto . después del nombre del objeto y el nombre del método.

persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años

// También es posible utilizar la sintaxis de corchetes [] para acceder a las propiedades y métodos utilizando una cadena como clave.

console.log(persona['nombre']); // Juan
console.log(persona['edad']); // 30
persona['saludar'](); // Hola, mi nombre es Juan y tengo 30 años

// En resumen, los objetos en JavaScript son una forma de almacenar y organizar datos y métodos relacionados. Los métodos son funciones que se definen dentro del objeto y se utilizan para realizar acciones en ese objeto.

// En JavaScript, los objetos son estructuras de datos que contienen propiedades y métodos. Una propiedad es una variable que almacena un valor, mientras que un método es una función que realiza una acción específica. Los objetos se pueden crear utilizando la sintaxis de objeto literal o utilizando la función constructora.

// Objeto Literal
// Un objeto literal se crea utilizando la siguiente sintaxis:

let objeto = {
    propiedad1: valor1,
    propiedad2: valor2,
    metodo1: function() {
      // Código del método1
    },
    metodo2: function() {
      // Código del método2
    }
  };

//   Donde propiedad1 y propiedad2 son propiedades del objeto y metodo1 y metodo2 son métodos del objeto. El código dentro de los métodos se ejecuta cuando se llama al método.

// Por ejemplo, podemos crear un objeto literal que represente una persona con las propiedades "nombre" y "edad" y los métodos "saludar" y "presentarse":

// //let persona = {
//     nombre: "Juan",
//     edad: 30,
//     saludar: function() {
//       console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
//     },
//     presentarse: function(saludo) {
//       console.log(saludo + ", mi nombre es " + this.nombre + ".");
//     }
//   };
  
  persona.saludar(); // Imprime "Hola, soy Juan y tengo 30 años."
  persona.presentarse("Buenos días"); // Imprime "Buenos días, mi nombre es Juan."

//   Función Constructora
// También podemos crear objetos utilizando una función constructora. Una función constructora es una función que se utiliza para crear objetos con las mismas propiedades y métodos. Para crear un objeto utilizando una función constructora, utilizamos la palabra clave new seguida del nombre de la función constructora.

function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log("Hola, soy " + this.nombre + " y tengo " + this.edad + " años.");
    };
    this.presentarse = function(saludo) {
      console.log(saludo + ", mi nombre es " + this.nombre + ".");
    };
  }
  
  let persona1 = new Persona("Juan", 30);
  let persona2 = new Persona("María", 25);
  
  persona1.saludar(); // Imprime "Hola, soy Juan y tengo 30 años."
  persona2.presentarse("Buenas tardes"); // Imprime "Buenas tardes, mi nombre es María."

//   En este ejemplo, la función constructora Persona se utiliza para crear objetos con las propiedades "nombre" y "edad" y los métodos "saludar" y "presentarse". Luego, utilizamos la palabra clave new para crear dos objetos, persona1 y persona2, utilizando la función constructora.

// En resumen, los objetos y métodos en JavaScript son herramientas importantes para la programación orientada a objetos. Los objetos se pueden crear utilizando la sintaxis de objeto literal o utilizando una función constructora, mientras que los métodos son funciones que se utilizan para realizar acciones específicas en los objetos.