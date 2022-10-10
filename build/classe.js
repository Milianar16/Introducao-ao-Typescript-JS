"use strict";
class Cachorro {
    /**
     * atributos ou propriedades
     */
    //*nome: string  // parametros
    //raca: string 
    // cor: string 
    // idade: number 
    // peso: number 
    //altura: number 
    //morde: boolean 
    //vacinado: boolean 
    // pedigree: boolean 
    /**
     * método construtor
     *
     * serve para ao criar um novo objeto da class,possamos receber valores
     * para que a classe utilize-os
     *
     * se o programador não criar o método construtor, a própria linguagem irá
     * gerar um método construtor padrão
     *
     * no Javascript/Typescript, se pode ter apenas um único método construtor
     */
    constructor(nome, raca, cor, idade, peso, altura, morde, vacinado, pedigree) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.morde = morde;
        this.vacinado = vacinado;
        this.pedigree = pedigree;
        /**
         * this faz referencia a própria classe dela mesma
         */
        //this.nome = nome;
        //this.raca = raca;
        //this.cor = cor;
        //this.idade = idade;
        //this.peso = peso;
        //this.altura = altura;
        //this.morde = morde;
        //this.vacinado = vacinado;
        //this.pedigree = pedigree
    }
    somar(a, b) {
        return a + b;
    }
}
/**
 * Objeto é uma instância de uma classe
 *
 */
let c = new Cachorro('Mc Poza');
let c2 = new Cachorro('Justin bebear');
console.log(c.nome); //Luki
console.log(c2.nome); //Jamal
