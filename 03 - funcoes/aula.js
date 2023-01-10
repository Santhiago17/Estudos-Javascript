function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function classificarImc(Imc){
    if (Imc < 18.5) {
        return "Abaixo do peso";
      } else if (Imc >= 18.5 && Imc < 25) {
        return "Peso normal";
      } else if (Imc >= 25 && Imc < 30) {
        return "Acima do peso";
      } else if (Imc >= 30 && Imc <= 40) {
        return "Obeso";
      } else {
        return "Obesidade grave";
      } 
}

function main(){
    const peso = 72;
    const altura = 1.81;
    
    const Imc = calcularImc(peso, altura);
    console.log(classificarImc(Imc));
}

main();




