class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Bruno Eduardo";
cliente1.cpf = 12172931575;
cliente1.agencia = 3671;
cliente1.saldo = 0;

cliente2.nome = "Bruce Wayne";
cliente2.cpf = 12187931575;
cliente2.agencia = 3656;
cliente2.saldo = 0;

console.log(cliente1);
console.log(cliente2);