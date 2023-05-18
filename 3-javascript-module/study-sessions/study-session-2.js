let pessoa = {
    nome: "Malu",
    sobrenome: "Pinto",
    idade: 27,
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`
    }
}

console.log(pessoa.nomeCompleto())

///////////////////////////
// loops

for(let n = 0; n < 10; n++) {
    console.log("qualquer coisa " + n)
}


///////////////////////////
// loops em arrays

let cores = ["preto", "branco", "azul", "vermelho"]

for (let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

// outra forma
for (let p in cores) {
    console.log(cores[p])
}

// outra forma
for (let cor of cores) {
    console.log(cor)
}