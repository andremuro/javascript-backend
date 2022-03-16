class Cliente {
  constructor(nome, cpf, email, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }

  depositar(valor) {
    this.saldo += valor
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, cpf, email, saldo, saldoPoup) {
    super(nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
  }

  depositarPoup(valor) {
    this.saldoPoup += valor
  }

  exibirCliente() {
    console.log('-----------------------------------')
    console.log('Nome:' + this.nome)
    console.log('Cpf:' + this.cpf)
    console.log('Email:' + this.email)
    console.log('Saldo:' + this.saldo)
    console.log('Saldo Poupança:' + this.saldoPoup)
    console.log('-----------------------------------')
  }
}

const andre = new ClientePoupanca(
  'André Muro',
  '47452027841',
  'andrefelipe.muro@gmail.com',
  1000,
  200
)

andre.exibirCliente()
andre.depositarPoup(200)
andre.exibirCliente()
