import {Jogador} from './Jogador'
import {Criador} from './Criador';

export class Jogo{

    constructor(criador:Criador, jogadores:Array<Jogador>)
    {
        this.Jogadores = jogadores
        this.Criador = criador
    }

    Jogadores:Array<Jogador>
    Criador:Criador

    ChecaLetraDeJogador = (posicao:number) => {
        let index = this.Criador.Palavra.indexOf(this.Jogadores[posicao].LetraEscolhida)
        return index === -1 ? false : true
    }

    DiminuiVidaDeJogares = () => {
        this.Jogadores.forEach((jogador) => {
            if(jogador.Vidas <= 0)
            {
                console.log('nao da')
            }

            jogador.Vidas = -1

        })
    }

}