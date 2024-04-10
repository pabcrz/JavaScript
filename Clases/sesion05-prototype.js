const someString = 'Lorem ipsum'
const phrase = 'La mejor forma de predecir el futuro es creándolo'

/* 
someString.length               // 
someString.toLocaleUpperCase    // 
someString.toLocaleLowerCase()  // 

console.log(someString)
console.log(someString.length) */

/* 1. Saber cuántos caracteres tiene la frase
// 1. crear una variable que guardara el total de caracteres que tiene la frase. no fue necesario jaja
2. obtener el total de caracteres con la propiedad length de un objeto string, representa la logintud de una cadena, siendo 2^53 - 1 la longitud maxima. 
3. Retornar un console.log con el parametro stringPhrase.length*/
const totalCharacter = (stringPhrase) => console.log(stringPhrase.length)

/* 2.- Saber cuántas letras tiene la frase 
1. Las letras son caracteres, y los espacios tambien. Eliminar los ecaracteres 'espacio' del string. La propiedad replaceAll recive dos argumentos, el caracterer a remplazar y el caracter de remplazo. 
2. Guardar en una variable el resultado del prototipo replaceAll, que es un nuevo string.
3. A la variable newString, con la propiedad length del objeto string, se puede obetenr el total de caracteres que hay en el nuevo string (sin espacios).
4. Retornar un console.log con el parametro newString.length*/

const totalLetters = (stringPhrase) => console.log(stringPhrase.replaceAll(' ', '').length)

/* 3.- Saber cuántas palabras tiene la frase
1. El string contiene una frase, y las palabras estan separadas por espacios.
2. Separar las palabras para poder contarlas
3. Guardar el total en una variable para mostrarla posteriormente.*/

// el metodo split regresa un array con substrings, podemos hacer un .length a un array

const totalWords = (stringPhrase) => console.log(stringPhrase.split(' ').length)

//     4.- Obtener la misma frase pero en mayúsculas

const phraseToUpperCase = (stringPhrase) => console.log(stringPhrase.toLocaleUpperCase())

//     5.- Obtener la misma frase pero con todas las letras "a" reemplazadas por un "4"
const replaceAto4 = (stringPhrase) => console.log(stringPhrase.replaceAll(/[aAáÁ]/g, '4'))

totalCharacter(phrase)
totalLetters(phrase)
totalWords(phrase)
phraseToUpperCase(phrase)
replaceAto4(phrase)
