// Ele faz uma comparação em uma unica linha, deixando o codigo mais curto.

const idadeMinima = 18
let idadeCliente = 17

//utilizando if
if (idadeCliente >= idadeMinima) {
  console.log('Pode consumir bebidas com alcool')
} else {
  console.log('Somente bebida sem alcool')
}
//utilizando operador ternario
console.log(
  idadeCliente >= idadeMinima
    ? 'Pode consumir bebidas com alcool' //Condição verdadeira
    : 'Somente bebida sem alcool' //Condição falsa
)
