



function mostrarValorAlternativa() {

  //getElementsByName, procura o atributo do name no HTML que sao iguais a grupo1
  const listaRadios = document.getElementsByName("grupo1");
  console.log(listaRadios);

  if (listaRadios[0].checked == true) {
    alert("Parabéns voce acertou! ")
  } else {
    alert("Resposta incorreta");
  }

}


function chickenAnswer() {
  const listaRadios = document.getElementsByName("grupo2");
  // listaRadios é um array, portanto começa com 0, se for "checked" aparece o alert
  console.log(chickenAnswer);

  if (listaRadios[0].checked == true) {
    alert("Parabéns voce acertou");
  } else {
    alert("Resposta incorreta")
  }
}

function goToRome() {
  const listaRadios = document.getElementsByName("grupo3");
  console.log(goToRome);

  if (listaRadios[0].checked == true) {
    alert("Parabéns voce acertou");
  } else {
    alert("Resposta incorreta")
  }
}
