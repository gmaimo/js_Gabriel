//ej 2. imprimir texto
console.log("¡Empezamos con javascript!");

//ej 3. Imprimir texto
console.log("Hola, soy un estudiante Hackademy");

//ej 4. declarar var y asignarla
let ingredientes = "Mozzarella, tomate";

console.log(ingredientes);

ingredientes = "Mozzarella, tomate, albahaca";

console.log(ingredientes);

//ej  5. declarar dos variables y unirlas formando una frase
let inicioFrase = "Tres tristes tigres";

const seguirFrase = "tragan trigo en un trigal";

console.log(inicioFrase + " " + seguirFrase);

console.log(inicioFrase , seguirFrase);

console.log(`${inicioFrase} ${seguirFrase}`);

//ej 6. inicializar var de toidos tipos primitivos e imprimir tipo de dato
let bool = false;
console.log(bool);
console.log(typeof (bool));

let num = Math.PI;
console.log(num);
console.log(typeof (num));

let sentence = "Buenas tardes";
console.log(sentence);
console.log(typeof (sentence));

let blank = null;
console.log(blank);
console.log(typeof (blank));

let unset;
console.log(unset);
console.log(typeof (unset));

let bignum = 1n;
console.log(bignum);
console.log(typeof (bignum));

const logo = Symbol ('A');
console.log(logo);
console.log(typeof (logo));

//ej 7. inicia variable num = 5 e imp “num” obteniendo 10 como resultado.
let numb = 5;
console.log (numb + 5);

//ej 8.
let phraseA = "A quien madruga,";
let phraseB = "poco mordedor.";

console.log(`${phraseA} ${phraseB}`);

//ej 9.
let number = 5;
/* number = "5"; */
console.log(typeof number);
console.log(typeof String(number));

//ej 10.
let numero = 5.123456;
console.log(numero.toFixed(3));

//ej 11.
var String1 = "ola k ase";
var String2 = "ase frio";

console.log((String1 + String2).length);

//ej 12.
let StringLength = (String1 + String2).length;
console.log(`El número total de carácteres es: ${StringLength}`);

// ej 13.
console.log(10 + "1");
console.log(typeof (10 + "1"));
// el simbolo + sirve para concadenar o para sumar 
// dependiendo del tipo de dato que se encuentre
// al encontar una string transforma el dato numérico
// en string
console.log(10 - "1");
console.log(typeof (10 - "1"));
// el símbolo - únicamente hace la función de restar
// por lo que transforma el tipo de dato string en
// number para realizar la operación matemática.

//ej. 14
let pal = "`Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo.";
console.log(pal);
console.log(pal.replace("contigo", "yo"));