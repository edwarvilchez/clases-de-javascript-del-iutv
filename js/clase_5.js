// cadena de texto

let text = "John Doe";

let nro = "123456";

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

// let answer = "It's alright";
/*let answer = "It is alright";*/

let answer = "It's alright";
console.log(answer);

let answer2 = "esta es una muestra del uso de el método length, que me \t permite conocer el tamaño de una cadena de texto";

console.log(answer2.length);
console.log(answer2.slice(5,25));
console.log(answer2.slice(-25,-8));
console.log(answer2.slice(2));
console.log(answer2.substring(2, 15));

let mensaje = "Visita Microsoft";
let nuevoMsj = mensaje.replace("Microsoft", "W3Schools");
console.log(mensaje);

let prueba = "estamos con js";
let prueba2 = prueba.toUpperCase();
console.log(prueba2);

let texto1 = "Saludos Terricolas";
let texto2 = texto1.toLowerCase();
console.log(texto2);

let palabra1 = "		Es de Noche	        ";
// let palabra2 = "Es de".concat(" ", " Noche");
console.log(palabra1.trim());






