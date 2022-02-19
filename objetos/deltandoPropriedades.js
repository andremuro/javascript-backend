//Desafio => deletar propriedades chave: valor do objeto

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefone: {
    fixo: '1432622145',
    celular: '14997449319'
  }
}

console.log('1----------------------')
console.log(cliente.telefone.fixo)
console.log(cliente.telefone.celular)
console.log('2----------------------')
console.log(cliente)
console.log('3----------------------')
//Deletando Telefone celular
delete cliente.telefone.celular
//Deletando email
delete cliente['email']
console.log(cliente)
