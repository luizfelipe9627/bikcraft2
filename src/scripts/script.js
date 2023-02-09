/* Ativa links do menu/header. */

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;

  // O includes é um método que verifica se uma string existe ou não no elemento.
  if (url.includes(href)) {
    // Adiciona uma classe no link chamada active.
    link.classList.add("active");
  }
}

// O forEach recebe uma função que recebe cada link da função e a executa até não restar mais parâmetro.
links.forEach(ativarLink);

/* Ativa itens do orçamento. */

// O search é usado para pegar a propriedade de busca da URL.
const parameters = new URLSearchParams(location.search);

function ativarProduto(parameters) {
  // Seleciona o elemento que tem o ID igual ao do value no HTML.
  const element = document.getElementById(parameters);

  // Verifica se o elemento existe, se existir ele irá executar o bloco de comando.
  if (element) {
    // Faz o elemento ser checado.
    element.checked = true;
  }
}

// O forEach recebe uma função que recebe cada parameters da função e a executa até não restar mais parâmetro.
parameters.forEach(ativarProduto);

/* Faz o conteúdo das perguntas frequentes, fechar e abrir ao clique. */

const questions = document.querySelectorAll(".questions button");

function activeQuestion(event) {
  // Está pegando a pergunta atual e
  const question = event.currentTarget;

  // Está obtendo o valor que está dentro do atributo aria-controls presente no question.
  const controls = question.getAttribute("aria-controls");

  // Está selecionando as respostas do aria-controls.
  const response = document.getElementById(controls);

  // Adiciona/remove a classe chamada active.
  response.classList.toggle("active");

  // Verifica se possui a classe active no elemento response, retornando true para sim e false para não.
  const active = response.classList.contains("active");
  console.log(active);

  // No question o setAttribute recebe dois valores, a propriedade que vai ser substituída e a que vai ser adicionada.
  question.setAttribute("aria-expanded", active);
}

function eventQuestion(question) {
  // Adiciona um evento de clique no question que ao ser ativado chama a função activeQuestion.
  question.addEventListener("click", activeQuestion);
}

// O forEach recebe uma função que recebe cada event da função e a executa até não restar mais parâmetro.
questions.forEach(eventQuestion);

/* Coloca a imagem no container maior quando clicado na bicicleta na galeria bicicletas. */

// Pega todas as imagens que estão dentro do container bicycle-images.
const gallery = document.querySelectorAll(".bicycle-images img");

// Pega o container bicycle-images.
const galleryContainer = document.querySelector(".bicycle-images");

const mainImage = document.querySelector(".main-image");

changeImg = (event) => {
  // O currentTarget pega o elemento em que o evento foi acionado.
  const img = event.currentTarget;

  // O matchMedia é usado para alterar um conteúdo quando chegar a tal tamanho de tela. Ele retorna false para quando a condição foi atingida e o true quando ainda não foi atingida.
  const media = matchMedia("(min-width: 1000px)").matches;

  if (media) {
    // O prepend permite adicionar o conteúdo ao inicio de um outro elemento, nesse caso no inicio da lista de imagens.
    galleryContainer.prepend(img);
  }
};

function eventsGallery(img) {
  // Adiciona um evento de clique no question que ao ser ativado chama a função changeImg.
  img.addEventListener("click", changeImg);
}

// O forEach recebe uma função que recebe cada img da função e a executa até não restar mais parâmetro.
gallery.forEach(eventsGallery);

/* Animação utilizando plugin. */

// Verifica se o plugin existe em tal página, se existir ele executa o plugin.
if (window.SimpleAnime) {
  // Executa o plugin.
  new SimpleAnime();
}
