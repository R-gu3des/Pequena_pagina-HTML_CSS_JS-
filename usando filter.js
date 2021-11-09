const objetos = [
    {nome: "Notebook", fragilidade: false, preco: 6705.00},
    {nome: "Camisa CK", fragilidade: false, preco: 200.00},
    {nome: "PlayStation 5", fragilidade: true, preco: 5500.00},
    {nome: "Papelão", fragilidade: false, preco: 20.00},
    {nome: "Copo de vidro", fragilidade: true, preco: 150.00},
    {nome: "Smartphone", fragilidade: true, preco: 3260.00},
]


const maiorFragil = objetos.filter(valor => valor.preco > 3000 && valor.fragilidade)
const maiorFragil2 = objetos.filter(valor => valor.preco > 3000).filter(valor => valor.fragilidade)

console.log(maiorFragil, maiorFragil2)
