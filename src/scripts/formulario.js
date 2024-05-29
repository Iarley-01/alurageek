const camposFormulario = document.querySelectorAll("[required]");
const tiposDeErro = [
  'valueMissing',
  'typeMismatch',
  'patternMismatch',
  'tooShort',
  'customError'
];

const mensagensDeErro = {
    nome: {
      valueMissing: "O campo de nome não pode estar vazio.",
      patternMismatch: "Por favor, preencha um nome válido.",
      tooShort: "Por favor, preencha um nome válido."
    },
    valor: {
      valueMissing: "O campo de valor não pode estar vazio.",
      typeMismatch: "Por favor, digite um valor válido.",
      tooShort: "Por favor, digite um valor válido."
    },
    imagem: {
      valueMissing: "O campo de imagem não pode estar vazio.",
      patternMismatch: "Por favor, preencha com uma URL válida.",
      tooShort: "O campo de imagem não tem caractéres suficientes."
    },
};
  

camposFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificaCampo(campo));
  campo.addEventListener("invalid", event => event.preventDefault());
});

function verificaCampo(campo) {
  let mensagem = "";
  campo.setCustomValidity("");
  
  tiposDeErro.forEach(erro => {
    if (campo.validity[erro]) {
      mensagem = mensagensDeErro[campo.name][erro];
      console.log(mensagem);
    }
  });
  
  const mensagemErro = campo.parentNode.querySelector(".mensagem-erro");
  const validadorDeInput = campo.checkValidity();
  
  if (!validadorDeInput) {
    mensagemErro.textContent = mensagem;
    campo.style.border = "2px solid red";
  } else {
    mensagemErro.textContent = "";
    campo.style.border = "2px solid var(--dark-blue)";
  }
}