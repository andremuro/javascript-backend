//Desafio => Extrair uma listagem de cliente apenas as informações de dependentes e montar uma lista única, para análise de outros departamentos do banco.
const cliente = [
  {
    //Chave:Valor
    nome: 'André',
    idade: 36,
    cpf: '1234567899',
    email: 'andre@email.com',
    telefones: ['1432622145', '14997449319'],
    dependentes: [
      { nome: 'Luiza', idade: 25, parentesco: 'namorada' },
      { nome: 'João', idade: 15, parentesco: 'filho' }
    ],
    saldo: 100
  }
]

const listaDependentes = [...cliente[0].dependentes]
console.log(listaDependentes)
