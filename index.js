import { SistemaAutenticacao } from "./controlers/SistemaAutenticacao.js";
import { Cliente } from "./models/Cliente.js";
import { Diretor } from "./models/Funcionarios/Diretor.js";
import { Gerente } from "./models/Funcionarios/Gerente.js";


const diretor = new Diretor("Bruce Wayne", 10000, 568713554125);
diretor.cadastrarSenha("741258963");

const gerente = new Gerente("Dick Grayson", 5000, 1651654164168);
gerente.cadastrarSenha("123");

const estaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(estaLogado);