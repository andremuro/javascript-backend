//Utilizando variáveis individualmente
let nota1 = 10
let nota2 = 6.5
let nota3 = 8
let nota4 = 7.5

let media = (nota1 + nota2 + nota3 + nota4) / 4

console.log('Média = ' + media)

//Utilizando arrays
const notas = [10, 6.5, 8, 7.5, 8]

let mediaArray =
  (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log('MédiaArray = ' + mediaArray)
console.log('Linhas = ' + notas.length)
// notas.length => conta o numero de linhas do array, logo não precisa se preocupar em alterar
// o denominador da divisão da média, alterando apenas a notas
