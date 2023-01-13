/* 

1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.*/

class Carro {
  marca;
  cor;
  gastoMedioPorKilometro;

  constructor(marca, cor, gastoMedioPorKilometro) {
    this.cor = cor;
    this.marca = marca;
    this.gastoMedioPorKilometro = gastoMedioPorKilometro;
  }

  calcularGastoDeViagem(distanciaEmKm, precoDoCombustivel) {
    return distanciaEmKm * this.gastoMedioPorKilometro * precoDoCombustivel;
  }
}

const fordka = new Carro("Ford", "Branco", 1 / 13);

console.log(fordka.calcularGastoDeViagem (48, 4.75));

const civic = new Carro('Honda', 'Cinza', 1/8);

console.log(civic.calcularGastoDeViagem(48, 4.75));