// ¡Claro! Aquí tienes una lista completa de los métodos de string disponibles en JavaScript:

// charAt(index) - Devuelve el carácter en el índice especificado de una cadena.
// charCodeAt(index) - Devuelve el valor Unicode del carácter en el índice especificado de una cadena.
// concat(str1, str2, ...) - Combina dos o más cadenas y devuelve una nueva cadena.
// endsWith(searchString, length) - Devuelve true si una cadena termina con el valor especificado, de lo contrario devuelve false.
// fromCharCode(num1, num2, ...) - Devuelve una cadena creada a partir de los valores Unicode especificados.
// includes(searchString, position) - Devuelve true si una cadena contiene el valor especificado, de lo contrario devuelve false.
// indexOf(searchValue, fromIndex) - Devuelve la posición del primer carácter del valor especificado en una cadena, o -1 si no se encuentra el valor.
// lastIndexOf(searchValue, fromIndex) - Devuelve la posición del último carácter del valor especificado en una cadena, o -1 si no se encuentra el valor.
// localeCompare(compareString) - Compara dos cadenas en la configuración regional actual del usuario.
// match(regexp) - Devuelve una matriz de todas las ocurrencias de un patrón en una cadena.
// normalize(form) - Devuelve la forma normalizada de una cadena Unicode.
// padEnd(targetLength, padString) - Rellena una cadena con otra cadena hasta que la longitud especificada sea alcanzada.
// padStart(targetLength, padString) - Rellena una cadena con otra cadena hasta que la longitud especificada sea alcanzada, comenzando al principio de la cadena.
// repeat(count) - Devuelve una cadena que consiste en la cadena original repetida el número de veces especificado.
// replace(searchValue, replaceValue) - Devuelve una nueva cadena con algunas o todas las ocurrencias del valor especificado reemplazadas por otro valor.
// search(regexp) - Devuelve la posición del primer carácter de la primera ocurrencia de un patrón en una cadena, o -1 si no se encuentra el patrón.
// slice(start, end) - Devuelve una sección de una cadena.
// split(separator, limit) - Divide una cadena en una matriz de subcadenas utilizando el separador especificado.
// startsWith(searchString, position) - Devuelve true si una cadena comienza con el valor especificado, de lo contrario devuelve false.
// substr(start, length) - Devuelve una subcadena de una cadena, comenzando en el índice especificado y con una longitud determinada.
// substring(start, end) - Devuelve una subcadena de una cadena, comenzando en el índice especificado y terminando en el índice especificado (exclusivo).
// toLocaleLowerCase() - Convierte una cadena en minúsculas según la configuración regional actual del usuario.
// toLocaleUpperCase() - Convierte una cadena en mayúsculas según la configuración regional actual del usuario.
// toLowerCase() - Convierte una cadena en minúsculas.
// toString() - Devuelve una cadena que representa el objeto.
// toUpperCase() - Convierte una cadena en mayúsculas

// ¡Por supuesto! Aquí te presento algunos ejercicios utilizando los métodos de string en JavaScript:

// Concatenar dos cadenas:

let str1 = "Hola ";
let str2 = "mundo";
let resultad = str1.concat(str2);
console.log(resultado); // "Hola mundo"

//Convertir una cadena a mayúsculas:

let str3 = "hola mundo";
let resulta = str.toUpperCase();
console.log(resultado); // "HOLA MUNDO"

//Convertir una cadena a minúsculas:

let str4 = "HOLA MUNDO";
let result = str.toLowerCase();
console.log(resultado); // "hola mundo"

//Obtener la longitud de una cadena:

let str5 = "Hola mundo";
let longitud = str.length;
console.log(longitud); // 10

//Reemplazar una parte de una cadena por otra:

let str6 = "Hola mundo";
let resul = str.replace("mundo", "amigos");
console.log(resultado); // "Hola amigos"

//Dividir una cadena en un arreglo:

let str7 = "Hola,amigos,del,mundo";
let arreglo = str.split(",");
console.log(arreglo); // ["Hola", "amigos", "del", "mundo"]

//Obtener el índice de la primera ocurrencia de un carácter o cadena en una cadena:

let str8 = "Hola mundo";
let indice = str.indexOf("m");
console.log(indice); // 5

//Obtener una parte de una cadena:

let str9 = "Hola mundo";
let resultado = str.slice(2, 6);
console.log(resultado); // "la m"

//Eliminar espacios en blanco al inicio y al final de una cadena:

let str10 = "    Hola mundo    ";
let resultado1 = str.trim();
console.log(resultado); // "Hola mundo"

//Verificar si una cadena contiene otra cadena:

let str = "Hola mundo";
let contiene = str.includes("mundo");
console.log(contiene); // true


