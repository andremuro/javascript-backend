//Desafio => Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com'
}

//Através desse array conseguimos acessar o objeto também.
//Porem a chave tem que ser igual a do objeto.
const chaves = ['nome', 'idade', 'cpf', 'email']
const chave = 'nome'

console.log('1----------------------')
console.log(cliente[chaves[0]])
console.log(cliente[chaves[1]])
console.log(cliente[chaves[2]])
console.log(cliente[chaves[3]])
console.log('2----------------------')
console.log(cliente[chave])
console.log(cliente['nome'])
console.log('3----------------------')
//Utilizando Foreach, faz a mesma coisa q no tópico 1, mas com o código mais limpo
chaves.forEach(infos => console.log(cliente[infos]))
console.log('4----------------------')
//No caso se passar uma chave do objeto que não exista ira exibir : Undefined
console.log(cliente['telefone'])
