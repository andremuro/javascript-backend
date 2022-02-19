//Desafio => Acessar um objeto com informações de um cliente e exibir essas informações no console.

//Objeto
const cliente = {
  //Chave:Valor
  nome: 'André',
  idade: 36,
  cpf: '1234567899',
  email: 'andre@email.com'
}

console.log('----------------------')
//Exibindo valor por ponto e tamplate string
console.log(`Nome: ${cliente.nome}`)
console.log(`Idade: ${cliente.idade}`)
console.log(`CPF: ${cliente.cpf}`)
console.log(`Email: ${cliente.email}`)

console.log('----------------------')
//A partir do momento que se acessa uma das chaves do JS pode-se utilizar os métodos do JS
//Nesse exemplo o Substring pega o valor 0 até o 3 da chave cpf do objeto cliente
console.log(cliente.cpf.substring(0, 3))
console.log(cliente.idade.parseFloat())
