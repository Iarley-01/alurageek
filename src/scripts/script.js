
async function listarProdutos() {
  const resposta = await fetch("https://api-alurageek-phi.vercel.app/produtos");
  const produtos = await resposta.json();
  return produtos;
}

async function criaProduto(nome, imagem, preco) {
  const resposta = await fetch("https://api-alurageek-phi.vercel.app/produtos", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      nome: nome,
      imagem: imagem,
      preco: preco
    })
  });
  
  if (!resposta.ok) {
    throw new Error(`Não foi possível enviar o produto: ${resposta.status}`);
  }
  
  const produtos = await resposta.json();
  return produtos;
}

async function deletaProduto(id){
  const resposta = fetch(`https://api-alurageek-phi.vercel.app/produtos/${id}`, {
    method: 'DELETE'
  });
  
  if (!resposta.ok) {
    throw new Error(`Não foi possível deletar o produto com id ${id}`);
  }
  
  const produtos = await resposta.json();
  return produtos;
}

export const apiFunctions = {
  listarProdutos,
  criaProduto,
  deletaProduto
};