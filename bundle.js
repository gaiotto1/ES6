"use strict";

// ====== TEMPLATE LITERALS ======
var nome = 'Julio';
var idade = '26'; // Forma antiga

console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos.'); // Utilizando template Literals

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos."));
"use strict";

// CONSTANTES E VARIÁVEIS DE ESCOPO
// const teste = "a";
// teste = 1;
// vai resultar em erro, pois não é possível alterar o valor da variável teste
// nesse caso é permitido a mutação da variável.
var linguagem = {
  nome: 'Java'
}; // mutação é quando trabalhamos com o mesmo formato, ou seja, nesse caso continuamos trabalhando com um objeto, mas alteramos os valores dentro dele.

linguagem.nome = 'Javascript';
console.log(linguagem); // ao tentar executar a linha de baixo, vai resultar em um erro, pois estamos tentando alterar o tipo da variável.
// linguagem = []
// VARIÁVEIS DE ESCOPO
// o escopo é separado por {}

function teste(b) {
  var a = 1;

  if (b > 4) {
    var _a = 8;
    console.log(b, _a);
  }
}

teste(10);
