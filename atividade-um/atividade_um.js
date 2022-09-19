//** Exercicio 1) Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro. */
let nomeUsuario = (prompt('Olá, me informe seu nome:'))
let tamanhoDaBase = Number(prompt(nomeUsuario + ' me informe o número da base do seu retângulo:'))
let tamanhoDaAltura = Number(prompt('Agora por favor informe o número da altura do seu retângulo:'))

let area = tamanhoDaBase * tamanhoDaAltura
let perimetro = 2 * tamanhoDaBase + 2 * tamanhoDaAltura

//////////////////////////////////////////////////////////////////////////////////////////////////////


alert(nomeUsuario + ' a area do seu retângulo é ' + area, 'e o valor do seu perímetro é ' + perimetro)

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//**abaixo é só confirmação pra ve sé funcionou */


console.log(nomeUsuario)
console.log(tamanhoDaBase)
console.log(tamanhoDaAltura)
console.log(area)
console.log(perimetro)