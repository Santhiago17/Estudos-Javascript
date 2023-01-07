/*Faça um programa para calcular o valor de uma viagem.

Você terá três variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de  combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoCombustivel = 4.74;
const consumoMedioCombustivel = 14;
const distanciaViagem = 585;

const litrosConsumidos = distanciaViagem / consumoMedioCombustivel;

console.log(litrosConsumidos);

const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));     


