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

  exibirSaldo() {
    console.log(this.saldo)
  }

  exibirCliente() {
    //console.log('Nome:' + this.nome)
    //console.log('Cpf:' + this.cpf)
    //console.log('Email:' + this.email)
    //console.log('Saldo:' + this.saldo)
    console.log('Saldo:' + `${andre.saldo}`)
  }
}

const andre = new Cliente(
  'André Muro',
  '47452027841',
  'andrefelipe.muro@gmail.com',
  1000
)

andre.exibirCliente()
andre.depositar(500)
andre.exibirSaldo()
