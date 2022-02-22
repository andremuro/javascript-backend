//Desafio => Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente
/** 
//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefones: ['1432622145', '14997449319'],
  dependentes: [[(nome = 'Luiza'), (idade = 25), (parentesco = 'namorada')]]
}

console.log('1----------------------')
console.log(cliente.dependentes[0])
console.log(cliente.dependentes[0][0])
console.log(cliente.dependentes[0][1])
console.log(cliente.dependentes[0][2])

console.log('2----------------------')

cliente.dependentes.push([
  (nome = 'João'),
  (idade = 15),
  (parentesco = 'filho')
])

console.log(cliente)

console.log('3----------------------')
const filho = cliente.dependentes.filter(dependente => dependente[1] === 15)
console.log(filho[0])
**/

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefones: ['1432622145', '14997449319'],
  dependentes: [{ nome: 'Luiza', idade: 25, parentesco: 'namorada' }]
}

console.log('1----------------------')
console.log(cliente.dependentes)
console.log(cliente.dependentes.nome)
console.log(cliente.dependentes.idade)
console.log(cliente.dependentes.parentesco)

console.log('2----------------------')

cliente.dependentes.push({
  nome: 'João',
  idade: 15,
  parentesco: 'filho'
})

console.log(cliente)

console.log('3----------------------')
const filho = cliente.dependentes.filter(dependente => dependente.idade === 15)
console.log(filho[0])
