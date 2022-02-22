//Desafio => Adicionar dependentes para um dos clientes cadastrados, com nome,idade e parentesco.

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com',
  telefones: ['1432622145', '14997449319']
}

cliente.dependentes = {
  nome: 'Luiza',
  idade: 25,
  parentesco: 'namorada'
}

console.log('1----------------------')
console.log(cliente)
console.log('2----------------------')
cliente.dependentes.nome = 'Luiza Silva'
console.log(cliente)
