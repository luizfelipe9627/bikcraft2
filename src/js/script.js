/* Ativa links do menu/header. */

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const href = link.href;
  const url = location.href;

  // O includes é um método que verifica se uma string existe ou não no elemento.
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

/* Ativa itens do orçamento. */

// O search é usado para pegar a propriedade de busca da URL.
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  // Seleciona o elemento que tem o ID igual ao do value no HTML.
  const elemento = document.getElementById(parametro);
  
  // Verifica se o elemento existe, se existir ele irá executar o bloco de comando.
  if (elemento) {
    // Faz o elemento ser checado.
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

/* Faz o conteúdo das perguntas frequentes, fechar e abrir ao clique. */
