import { Cliente } from "./models/Cliente.js";
import { ContaCorrente } from "./models/ContaCorrente.js";

const cliente1 = new Cliente("Bruno Eduardo", 12172931575);

const cliente2 = new Cliente("Bruce Wayne", 12187931575);

const contaCorrente1 = new ContaCorrente(cliente1, 741258963);
const contaCorrente2 = new ContaCorrente(cliente2, 96325741);

contaCorrente1.depositar(500);
console.log(contaCorrente1);

// contaCorrente1.transferir(200, contaCorrente2);


// console.log(contaCorrente2);