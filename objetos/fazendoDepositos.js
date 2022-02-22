//Desafio => Adicionar uma propriedade que eprmita "ações", para que o cliente que estão cadastrados consigam fazer operações bancárias

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

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)
