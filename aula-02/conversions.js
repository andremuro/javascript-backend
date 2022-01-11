// conversão implicita
const numero = 456
const numeroString = '456'
//comparação valor e tipo
console.log(numero === numeroString)
//comparação pelo valor => faz nesse caso uma conversão implicita
// ou seja transforma a variavel numero em uma string e compara as duas variaveis
console.log(numero == numeroString)
// prova de como a variavel numero virou do tipo string e concatenou com a outra.
console.log(numero + numeroString)

//conversão explicita
// converte o valor do tipo string para numero
console.log(numero + Number(numeroString))
