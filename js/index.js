const respostaHtml = document.querySelector("#resposta")
const boxPergunta = document.querySelector("#boxPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
  "Provavelmente, esperamos que sim",
  "Provavelmente, mas esperamos que não",
  "Provavelmente",
  "C e r t e z a",
  "Não tenho tanta certeza não",
  "já tava na hora",
  "Pergunta mais tarde, hoje eu to ocupado",
  "Minha resposta é não.",
  "Definitivamente!",
  "Sinais apontam que sim.",
  "Sinais apontam que não :(",
  "Não pergunta pra mim eu não sei de nada prometo",
  "Em caso de investigação policial declaro não ter nenhum envolvimento com esse grupo e não sei como vim parar no mesmo.",
  "Minha resposta é sim!",
]
//14 respostas possiveis 0 - 13
//gerar numero aleatorio-----------
//const respostasTotal = respostas.length
//const numeroAleatorio = Math.floor(Math.random() * respostasTotal)
//console.log(respostas[numeroAleatorio])
//----------------------------------------

//clicar em fazer pergunta
function fazerPergunta () {

    console.log(boxPergunta.value)
  if(boxPergunta.value == "") {
      alert("Digite sua Pergunta.")
      return
    }

  buttonPerguntar.setAttribute("disabled", true)    

  const pergunta = "<div>" + boxPergunta.value + "</div>"

  const respostasTotal = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * respostasTotal)
    console.log(respostas[numeroAleatorio])

  respostaHtml.innerHTML = pergunta + respostas[numeroAleatorio]

  respostaHtml.style.opacity = 1;
  //sumir a resposta depois de 3 seg
  setTimeout(function() {
    respostaHtml.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)

}
