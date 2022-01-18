const nome = 'André'
const sobrenome = 'Muro'
let idade = 15
const cidadeNascimento = 'São Paulo'
//concatenando normal
const apresentacao1 =
  'Meu nome é ' +
  nome +
  ' ' +
  sobrenome +
  ', minha idade é de ' +
  idade +
  ' anos e nasci em ' +
  cidadeNascimento

console.log(apresentacao1)

//utilizando template-string
const apresentacao2 = `Meu nome é ${nome} ${sobrenome}, minha idade é de ${idade} anos e nasci em ${cidadeNascimento}`

console.log(apresentacao2)
