// El if es una estructura de control en JavaScript que permite ejecutar diferentes bloques de código en función de si se cumple o no una determinada condición. La sintaxis básica del if es la siguiente:

if (condición) {
    // Bloque de código que se ejecuta si la condición es verdadera
  }

//   En este caso, si la condición es verdadera, se ejecutará el bloque de código que está dentro de las llaves. Si la condición es falsa, no se ejecutará ese bloque y el programa continuará con la siguiente instrucción.

// También se puede agregar una cláusula else para ejecutar un bloque de código diferente cuando la condición no se cumple:

if (condición) {
    // Bloque de código que se ejecuta si la condición es verdadera
  } else {
    // Bloque de código que se ejecuta si la condición es falsa
  }

//   En este caso, si la condición es verdadera, se ejecutará el primer bloque de código y si la condición es falsa, se ejecutará el segundo bloque.

// También se pueden anidar varios if para evaluar múltiples condiciones:

if (condición1) {
    // Bloque de código que se ejecuta si la condición1 es verdadera
  } else if (condición2) {
    // Bloque de código que se ejecuta si la condición1 es falsa y la condición2 es verdadera
  } else {
    // Bloque de código que se ejecuta si ninguna de las condiciones anteriores es verdadera
  }

//   En este caso, se evaluará la primera condición y si es verdadera, se ejecutará el primer bloque de código. Si es falsa, se evaluará la segunda condición y si es verdadera, se ejecutará el segundo bloque de código. Si ninguna de las condiciones anteriores es verdadera, se ejecutará el último bloque de código.

// Ejemplos:

//Si la variable edad es mayor o igual a 18, mostrar un mensaje de "Eres mayor de edad":

if (edad >= 18) {
    console.log("Eres mayor de edad");
  }

//   Si la variable temperatura es mayor a 30, mostrar un mensaje de "Hace calor", de lo contrario mostrar un mensaje de "Hace frío":

  if (temperatura > 30) {
    console.log("Hace calor");
  } else {
    console.log("Hace frío");
  }

//   Si la variable hora es mayor o igual a 12 y menor a 18, mostrar un mensaje de "Buenas tardes", de lo contrario mostrar un mensaje de "Buenos días" o "Buenas noches" según corresponda:

  if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes");
  } else if (hora >= 18) {
    console.log("Buenas noches");
  } else {
    console.log("Buenos días");
  }