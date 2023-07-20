const btnEnviar = document.getElementById("btnEnviar");

function changeAriaLabel(newLabel) {
  btnEnviar.setAttribute("aria-label", newLabel);
  setAttribute("aria-label", newLabel);
}

btnEnviar.addEventListener("click", function () {
  changeAriaLabel("Botão para reenviar o formulário");
});
