export class Jogador{

    constructor(nome:string, vidas:number)
    {
        this.Nome = nome
        this.Vidas = vidas
    }

    Nome:string
    Vidas:Number
    PalavraDoJogador:string
    //preciso implementar isso, o usuario vai ir completando a palavra dele conforme 
    //ele acerta as letras e o jogo vai verificando a cada rodada se as palavras do usuario
     //e do criador sao iguais

    LetraEscolhida:string
}