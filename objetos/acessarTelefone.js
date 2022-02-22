//Desafio => Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há mais de um número em algum cadastro.

//Objeto
const cliente1 = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefones: ['1432622145', '14997449319']
}

const cliente2 = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefones: {
    fixo: '1432622145',
    celular: '14997449319'
  }
}

console.log('1----------------------')
cliente1.telefones.forEach(telefone => console.log(telefone))
console.log('2----------------------')
console.log(cliente2.telefones.fixo)
console.log(cliente2.telefones.celular)
