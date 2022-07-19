// Questao 1

const q1 = () => {
  let base = document.getElementById("base").value;
  let altura = document.getElementById("altura").value;
  let calculoMedia = base * altura;

  let elementoResposta = document.getElementById("resposta-questao1");

  let valorResposta = `A área do terreno é de ${calculoMedia} metros.`

  elementoResposta.innerHTML = valorResposta;

}

//Questao 2
const q2 = () => {
  let cavalos = document.getElementById("cavalos").value;
  let calculoFerraduras = cavalos * 4;
  let elementoResposta = document.getElementById("resposta-questao2");

  let valorResposta = `A quantidade de ferraduras necessárias é de ${calculoFerraduras}.`

  elementoResposta.innerHTML = valorResposta;

}

//Questao 3
const q3 = () => {
  let paes = document.getElementById("paes").value;
  let broas = document.getElementById("broas").value;
  let calculoPaes = paes * 0.12;
  let calculoBroas = broas * 1.5;
  let totalVendas = calculoPaes + calculoBroas;

  let poupanca = parseFloat(totalVendas * 0.1).toFixed(2);

  let elementoResposta = document.getElementById("resposta-questao3");

  let valorResposta = `O valor total arrecadado das vendas é de R$ ${totalVendas}. E o dono deve guardar na poupança R$ ${poupanca}`

  elementoResposta.innerHTML = valorResposta;

}

// Questao 4
const q4 = () => {
  let name = document.getElementById("name").value;
  let idade = document.getElementById("idade").value;
  let diasVida = idade * 365;

  let elementoResposta = document.getElementById("resposta-questao4");

  let valorResposta = `${name}, você viveu ${diasVida} dias`

  elementoResposta.innerHTML = valorResposta;
}

// Questao 5
const q5 = () => {
  let gasolina = document.getElementById("gasolina").value;
  let reais = document.getElementById("reais").value;

  let calculoLitros = parseFloat((reais / gasolina).toFixed(2));

  let elementoResposta = document.getElementById("resposta-questao5");

  let valorResposta = `Você conseguiu colocar ${calculoLitros} litros de gasolina`

  elementoResposta.innerHTML = valorResposta;
}

//Questao 6

const q6 = () => {
  let peso = document.getElementById("peso").value;
  let calculo = parseFloat((peso * 12).toFixed(2));
  let elementoResposta = document.getElementById("resposta-questao6");

  let valorResposta = `O total a pagar é de R$ ${calculo} reais`

  elementoResposta.innerHTML = valorResposta;
}

//Questão 7 
const q7 = () => {
  let dias = document.getElementById("dias").value;
  let mes = document.getElementById("mes").value;
  let calculo = parseInt((mes - 1) * 30 + dias);
  let elementoResposta = document.getElementById("resposta-questao7");

  let valorResposta = `Já se passaram o total de ${calculo} dias`

  elementoResposta.innerHTML = valorResposta;

}

//Questao 8 
const q8 = () => {
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value * 2);
  let nota3 = parseFloat(document.getElementById("nota3").value * 3);
  let calculoMedia = ((nota1 + nota2 + nota3) / 6).toFixed(2);
  let elementoResposta = document.getElementById("resposta-questao8");
  let valorResposta = `A sua média é de ${calculoMedia}`
  elementoResposta.innerHTML = valorResposta;

}

//Questão 9

const q9 = () => {
  let tamP = document.getElementById("tamp").value * 10;
  let tamM = document.getElementById("m").value * 12;
  let tamG = document.getElementById("g").value * 15;

  let calculo = tamP + tamM + tamG;
  let elementoResposta = document.getElementById("resposta-questao9");
  let valorResposta = `O valor total arrecadado com as vendas é de R$ ${calculo} reais.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 10
const q10 = () => {
  let pontoAX = document.getElementById("pontoAX").value;
  let pontoAY = document.getElementById("pontoAY").value;
  let pontoBX = document.getElementById("pontoBX").value;
  let pontoBY = document.getElementById("pontoBY").value;

  let calculo = Math.sqrt(((pontoAX - pontoBX) ** 2) + ((pontoAY - pontoBY) ** 2));

  let elementoResposta = document.getElementById("resposta-questao10");
  let valorResposta = `A distância entre o ponto A e B é igual a ${calculo}.`
  elementoResposta.innerHTML = valorResposta;

} 