document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");
  const selectTiempo = document.getElementById("tiempo");
  const cortina = document.getElementById("cortina");
  const formulario = document.getElementById("formulario");

  const NUM_DADOS = 10;
  const caras = ["🎵", "🎨", "🔤", "🔣", "🔢", "🐾"];
  let resultadoReal = [];

  // Función para generar los dados
  function generarDados() {
    tablero.innerHTML = "";
    resultadoReal = [];

    for (let i = 0; i < NUM_DADOS; i++) {
      const divDado = document.createElement("div");
      divDado.classList.add("dado");
      const cara = caras[Math.floor(Math.random() * caras.length)];
      divDado.textContent = cara;
      tablero.appendChild(divDado);
      resultadoReal.push(cara);
    }

    console.log("Resultado real:", resultadoReal);
  }

  // Función que inicia la partida
  function iniciarPartida() {
    generarDados();

    // Ocultar cortina y formulario al inicio
    cortina.classList.add("oculto");
    formulario.classList.add("oculto");

    const tiempo = parseInt(selectTiempo.value) * 1000;

    setTimeout(() => {
      cortina.classList.remove("oculto"); // mostrar cortina
      formulario.classList.remove("oculto"); // mostrar formulario
      console.log("Tiempo terminado. Formulario visible.");
    }, tiempo);
  }

  btnStart.addEventListener("click", iniciarPartida);
});
