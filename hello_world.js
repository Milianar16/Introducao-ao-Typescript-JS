"use strict";
//tipagem no TypeScript
// tipagem implícita 
let username = 'shaolin matador_de_porco';
username = 'flavioDoPneu';
// tipagem explicita
let pi = 3.1415;
let logado = true;
//union types - uniao de tipos
let rg = 200780034025; // o | serve para separar 
rg = '200780034025';
let generico = [];
generico = {
    a: '',
    b: 8,
    c: true
};
generico = 'Eu sou genérico';
generico = 6.89;
const listaDeNomes = ['João Pedro', 'Cesar', 'Vitor', 'Claudia'];
listaDeNomes.push('Roberta');
const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
notas.push('juov');
let valores = ['fgvydsbj', 77, '296262191'];
const arr = [true, false, false];
const lista = [true, 2.3, 4]; // pode tudo numero, palavra
console.log(lista);
