//* ej. 2

/* console.log("¡Empezamos con javascript!"); */

//* ej. 3

/* console.log("Hola, soy un estudiante Hackademy"); */

//* ej. 4

/* let ingredientes = "Mozzarella, tomate";

console.log(ingredientes);

ingredientes = "Mozzarella, tomate, albahaca";

console.log(ingredientes); */

//* ej. 5

/* let inicioFrase = "Tres tristes tigres";

const seguirFrase = "tragan trigo en un trigal";

console.log(inicioFrase + " " + seguirFrase);

console.log(inicioFrase , seguirFrase);

console.log(`${inicioFrase} ${seguirFrase}`); */

//* ej 6.

/* let bool = false;
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
 */

//* ej 7.

/* let numb = 5;
console.log (numb + 5); */

//* ej 8.

/* let phraseA = "A quien madruga,";
let phraseB = "poco mordedor.";

console.log(`${phraseA} ${phraseB}`); */

//* ej 9.

/* let number = 5;
//  number = "5"; 
console.log(typeof number);
console.log(typeof String(number)); */

//* ej 10.

/* let numero = 5.123456;
console.log(numero.toFixed(3)); */

//* ej 11.

/* var String1 = "ola k ase";
var String2 = "ase frio";

console.log((String1 + String2).length); */

//* ej 12.

/* let StringLength = (String1 + String2).length;
console.log(`El número total de carácteres es: ${StringLength}`); */

//*  ej 13.

/* console.log(10 + "1");
console.log(typeof (10 + "1"));
//  el simbolo + sirve para concadenar o para sumar 
//  dependiendo del tipo de dato que se encuentre
//  al encontar una string transforma el dato numérico
//  en string
console.log(10 - "1");
console.log(typeof (10 - "1"));
//  el símbolo - únicamente hace la función de restar
//  por lo que transforma el tipo de dato string en
//  number para realizar la operación matemática. */

//* ej. 14

/* let pal = "`Hey Tú, cómo te llamas. ¡Hey, estoy hablando contigo.";
console.log(pal);
console.log(pal.replace("contigo", "yo")); */

//* ej. 15

/* let num = prompt("Escribe un numero y te diré si es mayor de 100");

if (num > 100){
    alert("es mayor de 100")
}else
    alert("es menor de 100") */

//* ej. 16

/* let n = prompt("Escribe un numero y te diré si es positivo o negativo");

if (n >= 0){
    alert("es positivo")
}else
    alert("es negativo") */

//* ej. 17

/* alert("introduce dos valores");
let a = parseInt(prompt("valor a:"));
let b = parseInt(prompt("valor b:"));
let c = a + b;

if (c > 50){
    alert(c * 2)
}else 
    alert(c * 3) */

//* ej. 18

/* let num = prompt("Introduce un número");

if (num % 3 == 0){
    alert("Es multiplo de 3")
}else if(num % 8 == 0){
    alert("Es multiple de 8")
}else alert("Error") */

//* ej. 19

/* alert("responde con un SI o un NO");
let buen_tiempo = prompt("Hace buen tiempo hoy?");
let trabajo = prompt("Trabajas hoy?");


if (buen_tiempo == "si" || buen_tiempo == "SI" || buen_tiempo == "Si"){
    buen_tiempo = true;
}else if (buen_tiempo == "no" || buen_tiempo == "NO" || buen_tiempo == "No")
    buen_tiempo = false;
else alert("el texto introducido no es correcto")

if (trabajo == "si" || trabajo == "SI" || trabajo == "Si") {
        trabajo = true;
}else if (trabajo ==  "no" || trabajo == "NO" || trabajo == "No")
        trabajo = false;
else alert("el texto introducido no es correcto")

console.log(trabajo);
console.log(buen_tiempo);


if (buen_tiempo && !trabajo){
    alert("te dejo ir a la playa😎")
}else if(buen_tiempo && trabajo){
    alert("a currar👷‍♂️")
}else if(!buen_tiempo && !trabajo){
    alert("no hace dia de playa☔")
}else alert("es lunes y está lloviendo🥺") */

//* ej. 20

/* for (let x=1; x<=20; x++){
    console.log(`${x-5}`)
}
 */

//* ej. 21

/* let b = 0;

for (let a = 0; a <= 20; a++){
    b+=a;
}
console.log(`La suma de los primeros 20 números da: ${b}`); */

//* ej. 22

/* let i = prompt("inserta un número");
let a = 0;

for(b=0; b<=i; b++){
    a += b;
}
alert(`La suma de los primeros ${i} números da: ${a}`);  */

//* ej. 23

/* let n = Number(prompt("inseta un número y te diré su factorial"));
let a = 1;

if (typeof n == "number" && !Number.isNaN(n) && Number.isInteger(n)){
    for(b=1; b<=n; b++){
        a *= b;
    }
}else alert(`no has insertado un número`);

if(typeof n == "number" && !Number.isNaN(n) && Number.isInteger(n)){
    alert(`el factorial de ${n} es: ${a}`);
} */

//* ej. 24

/* let min = 1;
let max = 100;

console.log(Math.round(Math.random() * (max - min) + min)); */

//* ej. 25

/* function tipCalculator(customerService, totalPrice){
    if (customerService == "fatal") return ((totalPrice * 0.05) + totalPrice);
    if (customerService == "ok") return ((totalPrice * 0.15) + totalPrice);
    if (customerService == "bueno") return ((totalPrice * 0.2) + totalPrice);
    if (customerService == "excelente") return ((totalPrice * 0.3) + totalPrice);
    return ((totalPrice * 0.18) + totalPrice);
}

console.log((tipCalculator(0,10)).toFixed(2));
 */

//* ej. 26

/* for (let a = 1; a <= 100; a++){
    if (a%5 == 0 && a%3 == 0){
        console.log(`${a}: javascript`)
    }else if (a%5 == 0){
        console.log(`${a}: script`)
    }else if(a%3 == 0){
        console.log(`${a}: java`);
    }else console.log(`${a}`);
} */

//* ej. 27

/* function isPar(number){
    if (number%2 == 0) return (`${number} is even`)
    return (`${number} is odd`)
}

console.log(isPar(5)); */

//* ej. 28

/* function interval(a, b){
    for(let i = a; i<= b; i+=2){
        if(i%2 == 0) i++;
        console.log(i);
    }
}

interval(0, 10); */

//* ej. 29

/* function calc (width, length){
    if (width == length) return Math.pow(width,2);
    else return width * 2 + length * 2
}

console.log(calc(20,20)); */

//* ej. 30

/* function areaCirculo(){
    for (let radio = 1; radio <= 10; radio++){
        console.log((Math.PI * Math.pow(radio,2)).toFixed(3));
    }
}

areaCirculo();

function thisArea(radio){
    console.log((Math.PI * Math.pow(radio,2)).toFixed(3));
}

thisArea(8); */

//*  ej. 31

/* function capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

let note = "hacer todos los ejercicios";

console.log(capitalize(note)); */

//* ej. 32

/* let fib = [0,1];
let n = 100; //  Hasta donde calculamos Fibonacci

for (let i = 2; i < n; i++){
    fib[i] = fib[i-1] + fib[i-2];
}

console.log(fib); */

//* ej. 33

/* const numeros = [1,2,3,4,5,6,7,8,9,10];

const pares = numeros.filter(num => num%2 == 0)

console.log(pares);

// const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++){
    if(i%2 == 0){
        numeros[i] = numeros[i+1];
    }
}

const numerosPares = new Set(numeros);

console.log(numerosPares); */

//* ej. 34

/* const días = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes',
'sabado', 'domingo'];

// console.log(días[0] == "lunes")

const díasM = días.filter(elem => elem.charAt(0) == "m")
const díasSinM = días.filter(días => días.charAt(0) != "m");

console.log(díasM);
console.log(díasSinM); */

//* ej. 35

/* let num = [100, 2, 20, 35, 4, 44];

num.sort((a,b)=>a-b);

const numMayores = num.filter(num => num>10)

console.log(numMayores); */

//* ej. 36

/* function dosEdadesMasAltas(array){
    array.sort((a,b)=>a-b);
    return array.slice(array.length-2)
}

console.log(dosEdadesMasAltas([1, 2, 10, 8, 22, 3, 6, 12, 80, 4, 55, 19])) //*  [80, 55] */

//* ej. 37

/* const array = [2,4,25,2,2,4,2,40,23,5];

const arrayPot3 = [];

for (let i = 0; i < array.length; i++){
    arrayPot3[i] = Math.pow(array[i],3);
}

console.log(arrayPot3);

const arrayP3 = array.map(function(x) { return Math.pow(x,3)});

console.log(arrayP3); */

//* ej. 38

/* const días = ['Lunes', 'Martes', 'Miércoles',
'Jueves', 'Viernes', 'Sábado', 'Domingo'];

díasAbreviado=[];

for (let i = 0; i < días.length; i++){
díasAbreviado[i] = días[i].substring(0,3);
}

let inicial = días.map (x => x.substring(0,3))

console.log(inicial)

console.log(díasAbreviado) */

//* ej. 39

/* const arrayNumeros = []

for (let i = 0; arrayNumeros.length < 10; i++){
    arrayNumeros[i] = parseInt(Math.random()*100)
}

let total = 0;

for (let j = 0; j < arrayNumeros.length; j++){
    total += arrayNumeros[j];
}

console.log(arrayNumeros, total);

const addSuma = 0;
const totalSuma = arrayNumeros.reduce((previous, current) => previous + current, addSuma);

console.log(totalSuma); */

//* ej. 40

/* let puntuaciónBolos = [12,20,26,4,13,0,-100,23,20,3,-1,16,14,0,6,5,22,17,5,30];

function mediaPuntuación(array){
    let aux_positivos = array.filter(positive => positive >= 0);
    const addSuma = 0;
    const totalSuma = aux_positivos.reduce((previous, current) => previous + current, addSuma);
    return (totalSuma/aux_positivos.length).toFixed(2);
}

console.log(`La puntuación media de la partida és: ${mediaPuntuación(puntuaciónBolos)}`) */

//* ej. 41

/* const arrayNumeros = []
let max = 100;
let min = 0;
let tamañoArray = 10;

for (let i = 0; i < tamañoArray; i++){
    arrayNumeros[i] = parseInt(Math.random()*(max - min) + min)
}

console.log(arrayNumeros);

function mediaPuntuación(array){
    let pares = array.filter(evenNumbers => evenNumbers%2 == 0);
        console.log(pares);
    let operacion = pares.map(x => (x*2)+10);
        console.log(operacion);
    let filtro = operacion.filter(condicion => condicion>10 && condicion<100);
        console.log(filtro);
    const addSuma = 0;
    const totalSuma = filtro.reduce((previous, current) => previous + current, addSuma);
    return totalSuma;
}

console.log(mediaPuntuación(arrayNumeros)) */

//* ej. 42

/* let datosPrimeros = [1,2,3,4,5,6];
let datosSegundos = [0,2,5,8,22,30];

function valoresUnicos(a,b){
    let primero = a.filter(item => !b.includes(item));
    let segundo = b.filter(item => !a.includes(item));
    return primero.concat(segundo).sort((a,b)=>a-b);
}

console.log(valoresUnicos(datosPrimeros,datosSegundos)); */

//* ej. 43

/* let valores = [5,5,5,5,5,5,5,5,5,2,5,5,5];

function unico(array){
    let i = 0;
    while(array[i] == array[i+1]){
        i++;
    }
    return array[i+1];
}
console.log(unico(valores)); */

//* ej. 44

/* let computadora = {
    open: function(){
        console.log(`Bienvenido`);
    },
    close: function(){
        console.log(`Adios`);
    }
}

computadora.open()
computadora.close() */

//* ej. 45

/* function Fruta(tipo, color, peso){
    this.tipo = tipo;
    this.color = color;
    this.peso = peso;
}

const manzana = new Fruta(`Manzana`,`roja`, `0.5kg`);
console.log(manzana); */

//* ej. 46

let data = [
    {
    name: "Gracia",
    score: [21,3,5,78,25],
    temporada: true
},
    {
    name: "Nico M",
    score: [55,66,77,55,66],
    temporada: false
},
    {
    name: "Nico G",
    score: [12,34,67,89,34],
    temporada: true
},
    {
    name: "Gemma",
    score: [12,90,13,45,6],
    temporada: true
}
]

function puntuacion(datos){
    let averageScore = datos.map (e => e.score.reduce ((a,b) => a+b)/e.score.length);
    let indice = 0;
    for (let i = 0; i < datos.length; i++){
        datos[i].score = averageScore[i];
        if (averageScore[i]>averageScore[i-1]) indice = i;
    }
    return datos[indice];
}

console.log(puntuacion(data));