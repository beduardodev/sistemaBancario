import { Cliente } from "./Cliente.js";
export class ContaCorrente {
    static numeroDeContas = 0;

    constructor(cliente, agencia) {
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
        ContaCorrente.numeroDeContas += 1;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this._saldo;
    }

    get agencia() {
        return this.agencia;
    }

}