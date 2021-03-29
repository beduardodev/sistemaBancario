import { SistemaAutenticacao } from "./controlers/SistemaAutenticacao.js";
import { Cliente } from "./models/Cliente.js";
import { Diretor } from "./models/Funcionarios/Diretor.js";
import { Gerente } from "./models/Funcionarios/Gerente.js";


const diretor = new Diretor("Bruce Wayne", 10000, 568713554125);
diretor.cadastrarSenha("741258963");

const gerente = new Gerente("Dick Grayson", 5000, 1651654164168);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Ra's al Ghul", 666, 999);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "741258963");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "999");

console.log("gerenteEstaLogado", gerenteEstaLogado);
console.log("diretorEstaLogado", diretorEstaLogado);
console.log("clienteEstaLogado", clienteEstaLogado);