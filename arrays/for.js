let lista = []
//Criando lista com 10 numeros aleatórios
for (let i = 0; i <= 9; i++) {
  lista[i] = Math.floor(Math.random() * 10)
  console.log(lista[i])
}

//Média Notas
const notas = [10, 9, 8, 7]
let somaNotas = 0

for (let i = 0; i < notas.length; i++) {
  somaNotas += notas[i]
}
let mediaNotas = somaNotas / notas.length

console.log(mediaNotas)
