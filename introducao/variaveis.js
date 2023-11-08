let jose = {nome: 'Jose', idade: 20,
endereco : {rua: 'Fco Ramalho Sobrinho', numero: 20, bairro: 'los grandes'} }

let maria = {nome: 'Maria das Graças', idade: 34,
endereco: {rua: 'Euclides de Alencar', numero: 12, bairro: 'Bairro Crystal'}}

let pedro = {nome: 'Pedro', idade: 12,
endereco : {rua: 'Damião Sales', numero: 44, bairro: 'Centro'}}

const clientes = [jose, maria, pedro]

clientes.map((c => {
    console.log ("Nome: ", c.nome, " - Rua: ", c.endereco.rua, " - Bairro: ", c.endereco.bairro)
}))