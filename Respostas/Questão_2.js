function triangulo(l1, l2, l3) {
    if (l1 == l2 && l2 == l3) {
        return `Triângulo Equilátero`
    }
    else if (l2 == l1 && l3 != l2 || l1 == l3 && l1 != l2 || l2 == l3 && l1 != l2) {
        return `Isósceles`
    }
    else {
        return `Escaleno`
    }
}

console.log(triangulo(2,5,4))