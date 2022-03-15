function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoupanca) {
  //Chamando o construtor do cliente para dentro do Cliente Poupança, herdando os comportamentos do Cliente
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoupanca = saldoPoupanca
}

ClientePoupanca.prototype.depositarPoupanca = function (valor) {
  this.saldoPoupanca += valor
}

const andre = new ClientePoupanca(
  'André Muro',
  '47452027841',
  'andrefelipe.muro@gmail.com',
  1000,
  200
)
console.log(andre)
andre.depositar(1000)
andre.depositarPoupanca(200)
console.log(andre)
