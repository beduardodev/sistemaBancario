import { Cliente } from "./models/Cliente.js";
import { Diretor } from "./models/Funcionarios/Diretor.js";
import { Gerente } from "./models/Funcionarios/Gerente.js";


const diretor = new Diretor("Bruce Wayne", 10000, 568713554125);
const gerente = new Gerente("Dick Grayson", 5000, 1651654164168);

SistemaAutenticacao.login(diretor, "741258963");