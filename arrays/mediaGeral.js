const SalaJS = [10, 7, 9, 6, 7, 9, 10, 3, 10]
const SalaJava = [6, 7, 9, 10, 8, 4]
const SalaPython = [9, 8, 7, 9, 10, 8, 5, 10]

function media(notas) {
  const somaNotas = notas.reduce((acumulador, atual) => atual + acumulador, 0)
  return console.log('A média é : ' + somaNotas / notas.length)
}

media(SalaJS)
media(SalaJava)
media(SalaPython)

function operacao(acumulador, atual) {
  return acumulador + atual
}

function media(notas) {
  const somaNotas = notas.reduce(operacao, 0)
  return console.log('A média é : ' + somaNotas / notas.length)
}

media(SalaJS)
media(SalaJava)
media(SalaPython)
