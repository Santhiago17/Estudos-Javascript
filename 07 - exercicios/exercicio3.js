/* Faça umm programa que calcule e imprima o salário a ser transferido para um funcionário.

Para realizar o cálculo receba o valor bruto do salário e o adicional dos benefícios.

O salário a ser transferido é calculado da seguinte maneira:

    valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as alíquotas:

    De R$ 0.00 aa R$ 1100.00 = 5%
    De R$ 1100.01 a R$ 2500.00 = 10%
    Maior que R$ 2500.00 = 15%

    Exemplo:
        Entrada:
            2000
            250

        Saída:
            2050.00

*/ 

const {gets, print} = require('./funcoes_auxiliares3');