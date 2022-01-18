//Operadores de Comparação
// == (comparação implicita) Compara valor
// === (comparação explicita) Compara valor e tipo

let num = 5
let texto = '5'

console.log(num == texto)
console.log(num === texto)

//typeof => mostra o tipo de dado que a variavel armazena

console.log(typeof num)
console.log(typeof texto)

// As boas práticas sugerem usar a conversão explicita

Number(texto)
String(num)

console.log(typeof num)
console.log(typeof texto)
