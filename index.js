class Aluno { 

    Nome 
    Idade
    Nota

    constructor(nome, idade, nota) { 
        this.Nome = nome;
        this.Idade = idade;
        this.Nota = nota;
    }
}

let Alunos = [];

function CadastrarAlunos(nome, idade, nota,array) { 
    let novoAluno = new Aluno(nome, idade, nota)
    if(!array.some(x=> x.Nome === nome))
    array.push(novoAluno)
    return novoAluno
}

function OrdenarPorNota(array) { 
    array.sort((a,b) => a.Nota - b.Nota)
    return array
}

function OrdernarPorIdade(array) {
    array.sort((a, b) => b.Idade - a.Idade)
    return array
}

function OrdenarPorNome(array) { 
    array.sort((a,b) => { 
        const nomeA = a.Nome.toUpperCase();
        const nomeB = b.Nome.toUpperCase();

        if(nomeA < nomeB) { 
            return -1;
        }
        if(nomeA > nomeB){ 
            return 1;
        }
        return 0;
    })
    return array
}

function CalcularMedia(array) { 
    if(array.length === 0 ){
        return 0;
    }

    let somaNotas = 0;

    array.forEach((aluno) => {
        somaNotas += Number(aluno.Nota)
        
    });

    const media = somaNotas / array.length;
    return media;
}

CadastrarAlunos("Cris", 30, 8, Alunos);
CadastrarAlunos("Carla", 25, 6, Alunos)
CadastrarAlunos("Amanda", 40, 9, Alunos)

console.log("Alunos Cadastrados", Alunos)
console.log("Alunos ordenados por nota:" , OrdenarPorNota(Alunos))
console.log("Alunos ordenados por idade:" ,OrdernarPorIdade(Alunos))
console.log("Alunos ordenados por nome:" , OrdenarPorNome(Alunos))
console.log("Média das notas dos alunos:" , CalcularMedia(Alunos))