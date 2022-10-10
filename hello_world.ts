//tipagem no TypeScript

// tipagem implícita 
let username = 'shaolin matador_de_porco'
username = 'flavioDoPneu'

// tipagem explicita
let pi: number = 3.1415
let logado: boolean = true

//union types - uniao de tipos
let rg: number| string = 200780034025 // o | serve para separar 
rg ='200780034025'

let generico: any = []
generico = {
    a:'',
    b:8,
    c:true
}
generico = 'Eu sou genérico'
generico = 6.89

const listaDeNomes: string [] = ['João Pedro', 'Cesar','Vitor', 'Claudia']
listaDeNomes.push('Roberta')

const notas: number[]= [1,2,3,4,5,6,7,8,9,10]


let valores: Array<string | number> = ['fgvydsbj', 77, '296262191']
const arr: Array <boolean>=[true, false, false]
const lista:Array<any>=[true,2.3,4] // pode tudo numero, palavra
console.log(lista)

