function tipoDeExtensao(filename) {
    const tipoDeExtensao = filename.split('.')

    return tipoDeExtensao[tipoDeExtensao.lenght - 1]
}

let filename = 'roteiro.pdf'

console.log(`A extensão do arquivo ${filename} é ${tipoDeExtensao(filename)}`)