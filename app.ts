import {Jogo} from "./models/Jogo"
import {Criador} from "./models/Criador"
import {Jogador} from "./models/Jogador"

let criador = new Criador('Daniel Gomes', 'Bacia')

let vidaMaxima:number = 7

let jogador1 = new Jogador('Raryson', vidaMaxima)
let jogador2 = new Jogador('Jorge', vidaMaxima)

let jogadores = [jogador1, jogador2]

let jogo = new Jogo(criador, jogadores)

console.log(`O nome do jogar e vendo pela variavel do jogo e ${jogo.Jogadores[1].Nome}`)