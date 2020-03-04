import "./styles/index.scss";
const board = require("../Classes/Board")

window.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("section");
  container.classList.add("container");
  container.innerHTML = `<h1 class="title">Afterverse Diceroller</h2>`;
  document.body.append(container);
  container.appendChild(board);

});
