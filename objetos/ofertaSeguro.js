//Desafio => Percorrer um objeto verificar se existe chave 'dependentes' e, caso exista, enviar uma mensagem de oferta de seguro.

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

function ofereceSeguro(obj) {
  const propCliente = Object.keys(obj)
  if (propCliente.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
  }
}

ofereceSeguro(cliente)

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
