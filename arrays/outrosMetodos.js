const notasTurmaA = [8, 10]
const notasTurmaB = [8, 10]

//sempre armazenar a concatenação em outra variavel
let concate = notasTurmaA.concat(notasTurmaB)
//console.log(concate)

let media = (concate[0] + concate[1] + concate[2] + concate[3]) / concate.length
//console.log(media)

//remover um elemento do array, escolhendo sua posição
var removerElemento = concate.splice(1)
//console.log(removerElemento)

var removerElemento = notasTurmaA.splice(1)
//console.log(removerElemento)

//ForEach
function notas(elemento) {
  console.log(elemento)
}

//notasTurmaB.forEach(notas)
