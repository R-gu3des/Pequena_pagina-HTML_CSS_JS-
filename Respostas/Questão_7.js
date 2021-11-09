const bhaskara = (a, b, c) => {
    let valor = (b*b) - (4) * a * c
    if (valor < 0) {
        console.log("Não foi possível continuar!")
        return
    }
    else {
        raiz_valor = 0
        for (let v = 0; v < 1000; v++ ) {
            if (v * v == valor) {
                raiz_valor = v
                break
            }
        }

        let resultado_1 = (-b + raiz_valor) / (2*a)
        let resultado_2 = (-b - raiz_valor) / (2*a)
        return `Resultado 1 = ${resultado_1}\nResultado 2 = ${resultado_2}`
    }
}

console.log(bhaskara(3, -5, -12))