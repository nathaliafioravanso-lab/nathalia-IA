const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
    alternativas: [
      { texto: 'Isso é assustador!', afirmacao: 'afirmacao' },
      { texto: 'Isso é maravilhoso', afirmacao: 'afirmacao' }
    ]
  },
  {
    enunciado: " Alguém te para na rua e pergunta sobre oque você pensa sobre as novas tecnologias",
    alternativas: [
      { texto: 'Acredito que isso será bom para o mundo, nos auxiliará de várias maneiras', afirmacao: 'afirmacao' },
      { texto: 'Acho que será ruim para a população, em algum momento isso tomara vida própria', afirmacao: 'afirmacao' }
    ]
  },
  {
    enunciado: " Você acredita que a inteligencia artificial dominará o mundo ?",
    alternativas: [
      { texto: 'Sim, ao longo do tempo ela ficara cada vez mais forte e mais poderosa', afirmacao: 'afirmacao' },
      { texto: 'Não, os humanos sempre terão o dominio sobre ela', afirmacao: 'afirmacao' }
    ]
  },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = " ";
  mostraAlternativas();
}

function mostraAlternativas() {
  for(const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", function() {
      respostaSelecionada(alternativa);
    });
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacoes + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = " Em 2049...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();
