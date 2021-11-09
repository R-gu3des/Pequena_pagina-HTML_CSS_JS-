const juros_simples = (ci, i, t) => {
    return (ci + (ci * i * t))
}

console.log(juros_simples(5000, 0.05, 6))

// Sem vontade de fazer (desnecessário)