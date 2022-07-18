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