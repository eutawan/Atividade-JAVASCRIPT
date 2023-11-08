function media(number1, number2){
    if (number1 > 10 || number1 < 0) {
        return 'Primeiro valor inválido'
    } else if (number2 > 10 || number2 < 0) {
        return 'Segundo valor inválido'
    } else {
        return (number1 + number2) / 2
    }
}

console.log(`Resultado: ${media(1, 2)}`)