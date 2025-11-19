document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");

  const NUM_DADOS = 10;
  const caras = ["🎵", "🎨", "🔤", "🔣", "🔢", "🐾"];

  function generarDados() {
    tablero.innerHTML = "";
    for (let i = 0; i < NUM_DADOS; i++) {
      const divDado = document.createElement("div");
      divDado.classList.add("dado");
      const cara = caras[Math.floor(Math.random() * caras.length)];
      divDado.textContent = cara;
      tablero.appendChild(divDado);
    }
  }

  btnStart.addEventListener("click", generarDados);
});
