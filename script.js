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

//Questao 11

const q11 = () => {
  let qtdedias = document.getElementById("qtdedias").value;

  let calculoAnos = parseInt(qtdedias / 360);
  let calculoMes = parseInt((qtdedias - (360 * calculoAnos)) / 30);
  let calculoDias = parseInt((qtdedias - (360 * calculoAnos)) % 30);



  let elementoResposta = document.getElementById("resposta-questao11");
  let valorResposta = `A empresa está há ${calculoAnos} ano(s), ${calculoMes} mes(es) e ${calculoDias} dia(s) sem acidentes.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 12
const q12 = () => {
  let salario = parseFloat(document.getElementById("salario").value).toFixed(2);

  let aumento = parseFloat(salario * 1.15).toFixed(2);
  let impostos = parseFloat(aumento * 0.08).toFixed(2)
  let salarioFinal = parseFloat(aumento - impostos).toFixed(2)

  let elementoResposta = document.getElementById("resposta-questao12");
  let valorResposta = `O salário inicial era de R\$ ${salario}. O salário com o aumento foi para R\$ ${aumento} e com os impostos passou a ser R\$ ${salarioFinal}.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 13
const q13 = () => {
  let numero = document.getElementById("numero").value;

  let calculaUnidade = parseInt(numero % 10)
  let calculaDezena = parseInt(((numero - (numero % 10)) / 10) % 10)
  let calculaCentena = parseInt(numero / 100);

  let elementoResposta = document.getElementById("resposta-questao13");
  let valorResposta = `CENTENA: ${calculaCentena}. 
  DEZENA: ${calculaDezena} 
  UNIDADE: ${calculaUnidade}`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 14
const q14 = () => {
  let area = document.getElementById("area").value;

  let calculaArea = (3.14 * (area ** 2))

  let elementoResposta = document.getElementById("resposta-questao14");
  let valorResposta = `A área da pizza é de: ${calculaArea}.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 15
const q15 = () => {
  let conta = document.getElementById("conta").value;

  let totalCarlos = parseInt(conta / 3).toFixed(2)
  let totalAndre = parseInt(conta / 3).toFixed(2)
  let resto = (conta % 3)
  let totalFelipe = resto + (parseInt(conta / 3))

  let elementoResposta = document.getElementById("resposta-questao15");
  let valorResposta = `Carlos deverá pagar R$ ${totalCarlos}. 
  André, ${totalAndre}  e Felipe, ${totalFelipe}`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 16
const q16 = () => {
  let sanduiches = document.getElementById("sanduiches").value;

  let totalQueijo = (sanduiches * 100) / 1000
  let totalPresunto = (sanduiches * 50) / 1000
  let totalCarne = (sanduiches * 100) / 1000


  let elementoResposta = document.getElementById("resposta-questao16");
  let valorResposta = `Para essa quantidade de sanduíches, você vai precisar de ${totalQueijo} kg(s) de queijo, ${totalPresunto} kg(s) de presunto e ${totalCarne}kg(s) de carne`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 17
const q17 = () => {
  let temp = document.getElementById("temp").value;

  let convertFah = temp * (9 / 5) + 32;



  let elementoResposta = document.getElementById("resposta-questao17");
  let valorResposta = `A temperatura correspondente em Fahrenheit é ${convertFah}`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 18
const q18 = () => {
  let normal = document.getElementById("hrNormal").value;
  let extra = document.getElementById("hrExtra").value;

  let calculaNormal = normal * 10;
  let calculaExtra = extra * 15;

  let salarioBruto = calculaNormal + calculaExtra;
  let salarioLiquido = salarioBruto - (salarioBruto * 0.10)

  let elementoResposta = document.getElementById("resposta-questao18");
  let valorResposta = `O salário  bruto é de R$ ${salarioBruto} e o salário líquido desse funcionário é de R$ ${salarioLiquido}.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 19
const q19 = () => {
  let frangos = document.getElementById("frango").value;


  let calculaChip = frangos * 4;
  let calculaAneis = frangos * 7;

  let total = parseFloat(calculaAneis + calculaChip).toFixed(2);


  let elementoResposta = document.getElementById("resposta-questao19");
  let valorResposta = `O valor total que a granja vai gastar é de R$ ${total}.`
  elementoResposta.innerHTML = valorResposta;
}

//Questao 20
const q20 = () => {
  let blusas = document.getElementById("blusas").value;
  let novelos = document.getElementById("novelos").value;


  let total = novelos / blusas;


  let elementoResposta = document.getElementById("resposta-questao20");
  let valorResposta = `São necessários ${total} novelos para fazer ${blusas} blusas.`
  elementoResposta.innerHTML = valorResposta;
}