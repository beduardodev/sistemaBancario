class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }
}

const cliente1 = new Cliente();

cliente1.nome = "Bruno Eduardo";
cliente1.cpf = 12172931575;

const cliente2 = new Cliente();

cliente2.nome = "Bruce Wayne";
cliente2.cpf = 12187931575;

const contaCorrente1 = new ContaCorrente();

contaCorrente1._saldo = 0;
contaCorrente1.agencia = 16158;