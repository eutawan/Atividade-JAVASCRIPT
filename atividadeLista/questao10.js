let p = document.getElementById('p')

const sum = (a, b) => {
    const sum = a + b

    p.innerText = sum
    return alert(sum)
}

let number1 = Number(prompt("Digite o primeiro numero: "))
let number2 = Number(prompt("Digite o segundo numero: "))

sum(number1, number2)