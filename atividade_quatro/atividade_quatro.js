//** Exercicio 4) Dado os três lados de um triângulo determinar o perímetro do mesmo. */


let nome_de_usuario = prompt('Olá, informe seu nome por favor:')

let lado_a_do_trinângulo = Number(prompt(nome_de_usuario + ' informe por gentileza o valor do lado A do seu triângulo:'))
let lado_b_do_trinângulo = Number(prompt('agora por favor informe o valor do lado B do seu triângulo:'))
let lado_c_do_trinângulo = Number(prompt('e por ultimo informe o valor do lado C do seu triângulo:'))

let calculo = lado_a_do_trinângulo + lado_b_do_trinângulo + lado_c_do_trinângulo

alert(nome_de_usuario + 'o valor do perimetro do seu triângulo é ' + calculo)


console.log(nome_de_usuario)
console.log(lado_a_do_trinângulo)
console.log(lado_b_do_trinângulo)
console.log(lado_c_do_trinângulo)
console.log(calculo)