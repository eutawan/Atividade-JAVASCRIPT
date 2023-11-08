let maior = false

function diferenca(number) {
    if (number > 13) {
        diferenca = true
        return (number - 13) * 2
    }
    return number - 13
}

let number = 12

if (maior) {
    console.log(`A diferença foi dobrada, pois o número é maior que 13`)
    console.log(`O resultado é ${diferenca(number)}`)
} else {
    console.log(`A diferença não foi dobrada, pois o número não é maior que 13`)
    console.log(`O resultado é ${diferenca(number)}`)
}