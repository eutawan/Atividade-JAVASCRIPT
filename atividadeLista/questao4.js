const soma = (num1, num2) => {
    if (num1 === num2) {
        return (num1 + num2) * 3
    }

    return num1 + num2
}

let numero1 = 1
let numero2 = 3

if (numero1 === numero2) {
    console.log(`Os números são iguais, sua soma será triplicada`)
    console.log(`O resultado é ${soma(numero1, numero2)}`)
} else {
    console.log(`A soma dos números é ${soma(numero1, numero2)}`)
}