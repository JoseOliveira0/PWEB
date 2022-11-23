function Conta()
{
    var nome, banco, numero, saldo;

    this.getNome = function() {
        return nome;
    };
    this.setNome = function (value) {
        nome = value;
    };


    this.getBanco = function() {
        return banco;
    };
    this.setBanco = function (value) {
        banco = value;
    };


    this.getNumero = function() {
        return numero;
    };
    this.setNumero = function (value) {
        nummero = value;
    };


    this.getSaldo = function() {
        return saldo;
    };
    this.setSaldo = function (value) {
        saldo = value;
    };


}

function Corrente() {
    var saldoEsp;

    this.getSaldoEsp = function() {
        return saldoEsp;
    };
    this.setSaldoEsp = function (value) {
        saldoEsp = value;
    };
}

function Poupanca() {
    var data, juros;

    this.getJuros = function() {
        return juros;
    };
    this.setJuros = function (value) {
        juros = value;
    };

    this.getData = function() {
        return data;
    };
    this.setData = function (value) {
        data = value;
    };
}

ContaCorrente.prototype = new Conta();
ContaPoupanca.prototype = new Conta();

//criando objetos

corrente = new ContaCorrente();
poupanca = new ContaPoupanca();

corrente.setNome('Jason Tatum');
corrente.setBanco('Inter');
corrente.setNumero(1000);
corrente.setSaldo(9900.0);
corrente.setSaldoEsp(900.0);

poupanca.setNome('Grant Willians');
poupanca.setBanco('Nubank');
poupanca.setNumero(1001);
poupanca.setSaldo(8800.0);
poupanca.setJuros(10.0);
poupanca.setData('10/09/2023');

alert("Conta Corrente \n\nNome: " + corrente.getNome()
     + "\nBanco: " + corrente.getBanco()
     + "\nNumero Conta: " + corrente.getNumero()
     + "\nSaldo: R$" + corrente.getSaldo()
     + "\nSaldo Especial: R$" + corrente.getSaldoEsp());

alert("Poupança \n\nNome: " + poupanca.getNome()
     + "\nBanco: " + poupanca.getBanco()
     + "\nNumero Conta: " + poupanca.getNumero()
     + "\nSaldo: R$" + poupanca.getSaldo()
     + "\nJuros: R$" + poupanca.getJuros()
     + "\nData de Vencimento: " + poupanca.getData());