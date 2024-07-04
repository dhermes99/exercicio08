const form = document.getElementById("formulario");

const nomes = [];
const telefones = [];

let linhas = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizarLista();
});

function adicionaLinha() {
  const inputNome = document.getElementById("nome");
  const inputTelefone = document.getElementById("telefone");

  nomes.push(inputNome.value);
  telefones.push(inputTelefone.value);

  let linha = "<tr>";
  linha += `<td>${inputNome.value}</td>`;
  linha += `<td>${inputTelefone.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  inputNome.value = "";
  inputTelefone.value = "";
}

function atualizarLista() {
  const corpoLista = document.querySelector("tbody");
  corpoLista.innerHTML = linhas;
}
