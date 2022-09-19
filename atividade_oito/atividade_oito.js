//** Faça um algoritmo que calcule e apresente o valor do volume de uma lata de óleo, dado seu raio e sua altura. */


let nome = (prompt('Olá, me diga seu nome:'))


let raio_da_lata =Number(prompt('Informe por favor ' + nome + ' o valor do raio da lata de óleo:'))
let altura_da_lata =Number(prompt('Agora informe o valor da altura da lata de óleo:'))


let volume_da_lata = 3.14 * Math.pow(raio_da_lata, 2) * altura_da_lata


alert(nome + ' o volume da sua lata de óleo é ' + volume_da_lata)



