/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. sendo elas:

1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 3.65;
const precoGasolina = 4.74;
const distanciaKm = 680;
const kmPorLitros = 12;
const tipoCombustivel = "Etanol";

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === "Gasolina") {
  const valorGasto = precoGasolina * litrosConsumidos;
  console.log(valorGasto.toFixed(2));

} else {
  const valorGasto = precoEtanol * litrosConsumidos;
  console.log(valorGasto.toFixed(2));

}

