import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";
import { ContaPoupanca } from "./models/ContaPoupanca.js";
import { Conta } from "./models/Conta.js";

const cliente1 = new Cliente("Bruno Eduardo", 12172931575);
const contaCorrente1 = new ContaCorrente(cliente1, 741258963);

contaCorrente1.depositar(500);

const contaPoupanca = new ContaPoupanca(50, cliente1, 741258963, 1001);

console.log(contaPoupanca);
console.log(contaCorrente1);