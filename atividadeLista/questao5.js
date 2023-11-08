const removeChar = function(string, positionChar) {
    const index = positionChar - 1

    let stringArray = string.split('')

    const removedChar = stringArray.splice(index, 1)[0]

    const newString = stringArray.join('')

    return [removedChar, newString]
}

let string = 'Cuida que hoje tem'

let rmv = removeChar(string, 3)
console.log(`Caractere removido: ${rmv[0]}`)
console.log(`Nova String: ${rmv[1]}`)