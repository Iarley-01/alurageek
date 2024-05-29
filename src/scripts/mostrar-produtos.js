import { apiFunctions } from './script.js';

const containerProdutos = document.getElementById("lista-de-produtos");

function constroiCardProduto(imagem, nome, preco, id) {
  const card = document.createElement("div");
  card.className = "produto-card";
  card.setAttribute("data-id", id);
  card.innerHTML = `
    <div class="produto-imagem">
                <img src="${imagem}" alt="">
              </div>
              <div class="produto-info">
                <h3 class="produto-nome">${nome}</h3>
                <div class="produto-preco">
                  <p>$ ${preco}</p>
                  <button class="botao-excluir"><img src="./src/img/trash-icon.svg" alt=""></button>
                </div>
              </div>
  `;
  const botaoExcluir = card.querySelector(".botao-excluir");
  botaoExcluir.addEventListener("click", async () => {
    const id = card.getAttribute("data-id");
    card.remove();
    await excluirProduto(id);
  });

  return card;
}

async function mostrarProdutos(){
  try {
    const listaApi = await apiFunctions.listarProdutos();
    listaApi.forEach(elemento => containerProdutos.appendChild(
        constroiCardProduto(elemento.imagem, elemento.nome, elemento.preco, elemento.id)
      ));
  } catch {
    lista.innerHTML = `<h1>Não foi possível exibir os vídeos</h1>`;
  }
}

mostrarProdutos();

async function excluirProduto(idProduto) {
  try {
    await apiFunctions.deletaProduto(idProduto);
  } catch {
    throw new Error("Não foi possível excluir");
  }
  
}