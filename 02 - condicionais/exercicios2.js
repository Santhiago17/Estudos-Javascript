/* 

2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:

- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade Grave;

*/

const peso = 72;
const altura = 1.81;

const Imc = peso / (altura * altura);

console.log(Imc);

if (Imc < 18.5) {
  console.log("Abaixo do peso");
} else if (Imc >= 18.5 && Imc < 25) {
  console.log("Peso normal");
} else if (Imc >= 25 && Imc < 30) {
  console.log("Acima do peso");
} else if (Imc >= 30 && Imc <= 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade grave");
}
