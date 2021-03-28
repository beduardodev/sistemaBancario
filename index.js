import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";

const cliente1 = new Cliente();

cliente1.nome = "Bruno Eduardo";
cliente1.cpf = 12172931575;

const cliente2 = new Cliente();

cliente2.nome = "Bruce Wayne";
cliente2.cpf = 12187931575;

const contaCorrente1 = new ContaCorrente();
const contaCorrente2 = new ContaCorrente();

contaCorrente1._saldo = 0;
contaCorrente1.agencia = 16158;
contaCorrente1.cliente = cliente1;
contaCorrente1.depositar(500);

contaCorrente2._saldo = 0;
contaCorrente2.agencia = 156168;
contaCorrente2.cliente = cliente2;

contaCorrente1.transferir(200, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);