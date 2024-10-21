// Seleção de elementos

const inputCep = document.querySelector("#cep");
const inputCidade = document.querySelector("#cidade");
const inputEstado = document.querySelector("#estado");
const inputRegiao = document.querySelector("#regiao");
const inputUf = document.querySelector("#uf");
const inputRua = document.querySelector("#rua");
const background = document.querySelector("#background-info");
const loader = document.querySelector("#loader");
const btnPesquisar = document.querySelector("#btn-pesquisar");
const btnLimpar = document.querySelector("#btn-limpar")
const fecharMsg = document.querySelector("#fechar-mensagem");
const form = document.querySelector(".formulario");
const accept = /^[0-9\r\n]*$/;

// Eventos

inputCep.addEventListener("keypress", (evento) => {
  const keyPress = String.fromCharCode(evento.keyCode);
  if (!accept.test(keyPress)) {
    evento.preventDefault();
    alert("Apenas números de 0 a 9 são permitidos!");
    return
  }
})

inputCep.addEventListener("keypress", (press) => {
  const valorDoInput = inputCep.value;
  if (press.key === 'Enter') {
    apiFunction(valorDoInput);
  }
})

btnPesquisar.addEventListener("click", () => {
  const valorDoInput = inputCep.value;
  if (valorDoInput.length !== 8) {
    errorFunction('Por favor, forneça um valor de CEP válido!');
    form.reset();
  }
  else {
    apiFunction(valorDoInput);
  }
  return
})

btnLimpar.addEventListener("click", () => {
  form.reset();
})

fecharMsg.addEventListener("click", () => errorFunction());

// Funções

function mostrarLoader() {
  background.classList.toggle("hide");
  loader.classList.toggle("hide");
}

function errorFunction(msg) {
  const blockMsg = document.querySelector("#message");
  const background = document.querySelector("#background-info");
  const pMessage = document.querySelector("#pmessage");
  pMessage.innerText = msg;
  blockMsg.classList.toggle("hide");
  background.classList.toggle("hide");
}

async function apiFunction(cep) {
  mostrarLoader();
  inputCep.blur();
  const api = `https://viacep.com.br/ws/${cep}/json/`;
  const resposta = await fetch(api);
  const dados = await resposta.json();
  if (dados.erro === 'true') {
    form.reset();
    mostrarLoader();
    errorFunction("Por favor, forneça um valor de CEP válido!")
    return
  }
  inputCidade.value = dados.localidade;
  inputEstado.value = dados.estado;
  inputRegiao.value = dados.regiao;
  inputUf.value = dados.uf;
  inputRua.value = dados.logradouro;
  mostrarLoader();

}
