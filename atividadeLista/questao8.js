let number1 = prompt("Digite o primeiro numero: ")
let number2 = prompt("Digite o segundo numero: ")

number1 = Number(number1)
number2 = Number(number2)

const sum = (a, b) =>  a + b

if (!isNaN(number1) && !isNaN(number2)) {
    alert(`A soma dos números é ${sum(number1, number2)}`)
} else {
    alert('Digite números válidos')
}