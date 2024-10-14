const containerForm = document.querySelector(".contForm");
const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputCidade = document.querySelector("#cidade");
const inputEstado = document.querySelector("#estado");
const inputRegiao = document.querySelector("#regiao");
const inputUf = document.querySelector("#uf");
const fecharMsg = document.querySelector("#fechar-mensagem");

inputCep.addEventListener("keypress", (evento) => {
  const accept = /[0-9]/;
  const keyPress = String.fromCharCode(evento.keyCode);
  if (!accept.test(keyPress)) {
    evento.preventDefault();
    alert("Apenas números de 0-9 são permitidos!");
    return
  }
})

inputCep.addEventListener("keyUp", (evento) => {
  const valorDoInput = evento.target.value;
  if(valorDoInput.length === 8) {
    apiFunction(inputValue);
    }
})

const apiFunction = async (cep) => {

}

const mostrarLoader = () => {
  const background = document.querySelector("#background-info");
  const loader = document.querySelector("#loader");
}