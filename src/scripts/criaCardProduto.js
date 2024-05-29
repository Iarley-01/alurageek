import { apiFunctions } from './script.js';

const formulario = document.getElementById("formulario");

async function criaCard(evento) {
  const nome = document.querySelector("[data-nome]").value;
  const valor = document.querySelector("[data-valor]").value;
  const imagem = document.querySelector("[data-imagem]").value;
  
  try {
   await apiFunctions.criaProduto(nome, imagem, valor);
   console.log(apiFunctions.criaProduto(nome, imagem, valor));
  } catch(e) {
    console.error(e);
  }
}

formulario.addEventListener("submit", evento => criaCard(evento));