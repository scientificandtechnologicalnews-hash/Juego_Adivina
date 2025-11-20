document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");
  const selectTiempo = document.getElementById("tiempo");
  const cortina = document.getElementById("cortina");
  const formulario = document.getElementById("formulario");

  const NUM_DADOS = 10;
  const caras = ["🎵", "🎨", "🔤", "🔣", "🔢", "🐾"];

  // Aquí guardaremos las caras reales
  let resultadoReal = [];

  function generarDados() {
    tablero.innerHTML = "";
    resultadoReal = [];

    for (let i = 0; i < NUM_DADOS; i++) {
      const divDado = document.createElement("div");
      divDado.classList.add("dado");

      const cara = caras[Math.floor(Math.random() * caras.length)];
      divDado.textContent = cara;
      tablero.appendChild(divDado);

      // Guardamos las caras reales
      resultadoReal.push(cara);
    }

    console.log("Resultado real:", resultadoReal);
  }

  function iniciarPartida() {
    generarDados();

    cortina.classList.add("oculto");
    formulario.classList.add("oculto");

    const tiempo = parseInt(selectTiempo.value) * 1000;

    setTimeout(() => {
      cortina.classList.remove("oculto");
      formulario.classList.remove("oculto");
      console.log("Tiempo terminado. Formulario visible.");
    }, tiempo);
  }

  btnStart.addEventListener("click", iniciarPartida);
});
