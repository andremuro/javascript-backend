const numeros = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24
]

//Primeiro parametro = Numero de inicio = 0
//Segundo parametro = Numero Final = numeros.length / 2
const primeiraMetade = numeros.slice(0, numeros.length / 2)
const segundaMetade = numeros.slice(numeros.length / 2)

console.log(primeiraMetade)
console.log(segundaMetade)
