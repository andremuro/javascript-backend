//Média Notas
const notas = [10, 9, 8, 7]
let somaNotas = 0

notas.forEach(nota => {
  somaNotas += nota
})

let mediaNotas = somaNotas / notas.length

console.log(mediaNotas)
