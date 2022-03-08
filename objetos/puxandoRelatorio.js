//Desafio => Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco.

//Objeto
const cliente = {
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
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}

let relatorio = ''

for (let info in cliente) {
  if (
    //Faz a verificação do tipo e se for igual a object ou function ele não percorre.
    typeof cliente[info] === 'object' ||
    typeof cliente[info] === 'function'
  ) {
    continue
  } else {
    relatorio += `
    ${info} : ${cliente[info]}
    `
  }
}

console.log(relatorio)
