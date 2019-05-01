// CONSTANTES E VARIÁVEIS DE ESCOPO

// const teste = "a";
// teste = 1;
// vai resultar em erro, pois não é possível alterar o valor da variável teste

// nesse caso é permitido a mutação da variável.

const linguagem = { nome: 'Java' };
// mutação é quando trabalhamos com o mesmo formato, ou seja, nesse caso continuamos trabalhando com um objeto, mas alteramos os valores dentro dele.
linguagem.nome = 'Javascript';
console.log(linguagem)

// ao tentar executar a linha de baixo, vai resultar em um erro, pois estamos tentando alterar o tipo da variável.
// linguagem = []

// VARIÁVEIS DE ESCOPO
// o escopo é separado por {}
function teste(b) {
    let a = 1;
    
    if (b > 4) {
        let a = 8
        console.log(b, a);
    }
}
teste(10);