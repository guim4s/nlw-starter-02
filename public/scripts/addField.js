// Procurar o botão
document
  .querySelector("#add-time")
  // Quando clicar no botão
  .addEventListener("click", cloneField);

// Executar uma ação
function cloneField() {
  // Duplicar os campos
  const newFieldContainer = document
    .querySelector(".schedule-item")
    .cloneNode(true);

  // Pegar os campos
  const fields = newFieldContainer.querySelectorAll("input");

  // Limpar cada campo usando o forEach do JS
  fields.forEach(function (field) {
    field.value = "";
  });

  // Colocar na página
  document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
