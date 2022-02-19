//Desafio =>  Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.
// Adicionar um conjunto de chave: valor

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com'
}

console.log('1----------------------')
//Exibi como é
console.log(cliente)
//Adiciona um telefone
cliente.telefone = '1432622145'
console.log('2----------------------')
console.log(cliente)
console.log('3----------------------')
cliente.telefone = '14999999999'
cliente.nome = 'Felipe'
console.log(cliente)
