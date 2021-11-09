const pessoa = {
    nome : 'Maria',
    idade : 19,
    Altura : 1.82,
    Endereco : {
        Rua: 'Mariz de Barros',
        numero: 408
    }
}

const {nome, Endereco, idade} = pessoa
console.log(nome,idade, Endereco)

for (let atrib in pessoa) {
    console.log(`${atrib} ---> ${pessoa[atrib]}`)
}


numeros = [5, 7, 9, 5, 4, 6, 8]
// Utilizando break para parar um laço nomeado (Não vai parar o laço mais próximo)


anterior: for (let c in numeros){
    console.log(numeros[c])
    for (let j in numeros){
        console.log(numeros[j])
        if (j == 4) {
            break anterior
        }
    }
}