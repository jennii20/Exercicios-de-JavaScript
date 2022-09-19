//** Exercicio 2) Dado o tamanho do lado de um quadrado, calcular a área e o perímetro do mesmo.*/

alert('Código funcionando')
let usuario = prompt('Me informe seu nome por favor?')

let lado_do_quadrado = Number (prompt(usuario + ' informe a númeração do lado do seu quadrado:'))
let area = lado_do_quadrado ** 2
let perimetro = lado_do_quadrado * 4

alert(usuario + 'a area do seu quadrado é ' + area + ' e seu perímetro é ' + perimetro)


console.log(usuario)
console.log(lado_do_quadrado)
console.log(perimetro)
