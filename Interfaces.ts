/**let pessoa = {
    nome: 'Miliana',
    idade: 22,
    altura: 1.70,
    cpf: '2007556178-96'
    solteiro: false,
    habilidades:['Java', 'Angular', 'TypeScript', 'Javascript', 'Node.js','Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'

    }

}

let pessoa2 ={
    nome: 'Miliana',
    idade: 22,
    altura: 1.70,
    cpf: '2007556178-96'
    solteiro: false,
    habilidades:['Java', 'Angular', 'TypeScript', 'Javascript', 'Node.js','Spring Boot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 567,
        estado: 'CE',
        complemento: 'Sem complemento',
        cep: '123000-000'
    
}
rg: '192517933384'
}*/

interface Endereco {
    rua: string
    numero: number
    estado: string
    complemento: string
    cep: string
}

interface Pessoa {
    nome: string
    idade: number
    altura: number
    cpf: string
    solteiro: boolean
    habilidades: string[]
    endereco: Endereco
    rg:string
    cumprimentar(): void // método de forma abstrata
}

const p:Pessoa ={
    altura: 1.9 ,
    nome: 'Faustão',
    idade: 12,
    cpf: '2007556178-96',
    solteiro: true,
    habilidades: ['HTML'],
    rg: '61474223598',
    endereco:{
        rua:'Rua Bacana',
        cep: '123000-000',
        complemento: 'Apartamento',
        estado: 'PE',
        numero:789
    },
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome)
    }
}
 
const p2: Pessoa= {
    nome: 'Paula',
    altura: 1.7,
    idade: 24,
    cpf:'222.6666.544-96',
    habilidades: ['HTML'],
    endereco {
        rua:'Rua no Ceará',
        cep:'15600-63',
        complemento:'Complemento não sei',
        estado:'CE',
        numero:789,
    }

}
