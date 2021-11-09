const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')


axios.get(url).then(resposta => {
    const funcionarios = resposta.data
    
    // const mulheres = funcionarios.filter(pessoa => pessoa.genero == "F")
    // const mulheres = funcionarios.filter(pessoa => pessoa["genero"] == "M")
    // const mulherChinesa = mulheres.filter(mulher => mulher.pais == "China")

    const mulherChinesa = funcionarios.filter(pessoa => pessoa.genero == "F" && pessoa.pais == "China")
    const menorSalario = mulherChinesa.reduce((anterior, atual) => {
        return anterior.salario < atual.salario ? anterior : atual
    })

    console.log(menorSalario)

    // Literal
    let menor = mulherChinesa[0]

    for (let mulher of mulherChinesa){
        if (mulher.salario < menor.salario){
            menor =     mulher
        }
        
    }
    console.log("\n", menor)
})


// Utilizando o reduce

const arrai = [6, 5, 7, 9, 8, 3, 10, 15, 11]

const resultado = arrai.reduce((anterior, atual) => {
    console.log(anterior, atual)
    return anterior < atual ? anterior : atual  
})

console.log(`\nmenor valor = ${resultado}`)