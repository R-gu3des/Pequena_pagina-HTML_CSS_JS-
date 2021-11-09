let string = "10 20 20 8 25 3 0 30 1"

let lista = string.split(' ')
console.log(lista)

const desempenho = lista => {
    let maior = lista[0]
    let contar = 0
    let pior = lista[0]
    let posicao = 0
    for (let c in lista){
        if (c > 0){
            if (lista[c] > maior) { 
                contar = contar + 1
                maior = lista[c]
            }
        }
        if (lista[c] < pior) {
            pior = lista[c]
            posicao = c
        }
        
    }
    return `Bateu o recorde ${contar} vezes e sua pior posição foi a ${Number(posicao) + 1}`
}
console.log(desempenho(lista))