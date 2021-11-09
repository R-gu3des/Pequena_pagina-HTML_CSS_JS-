let string = 'puta'
let string_2 = 'tupa'

for (let c in string){
    if (string[c] in string_2){
        console.log(`${string[c]} está em ${string_2}`)
    }
}