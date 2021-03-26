class Cliente {
    nome;
    cpf;
}
class ContaCorrente {
    agencia;
    saldo;
}

const cliente1 = new Cliente();

cliente1.nome = "Bruno Eduardo";
cliente1.cpf = 12172931575;

const cliente2 = new Cliente();

cliente2.nome = "Bruce Wayne";
cliente2.cpf = 12187931575;

const contaCorrente1 = new ContaCorrente();

contaCorrente1.agencia = 11561;
contaCorrente1.saldo = 0;

console.log(contaCorrente1.saldo);
contaCorrente1.saldo = 100;
console.log(contaCorrente1.saldo);

let valorSacado = 200;

if (contaCorrente1.saldo >= valorSacado) {
    contaCorrente1.saldo -= valorSacado;
}

console.log(contaCorrente1.saldo);

console.log(cliente1);
console.log(cliente2);