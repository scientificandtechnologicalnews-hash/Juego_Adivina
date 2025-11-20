document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");
  const selectTiempo = document.getElementById("tiempo");
  const cortina = document.getElementById("cortina");
  const formulario = document.getElementById("formulario");

  // Número de dados y posibles caras
  const NUM_DADOS = 10;
  const caras = ["🎵", "🎨", "🔤", "🔣", "🔢", "🐾"];

  // Guardaremos las caras que salieron para compararlas después
  let resultadoReal = [];

  // Función para generar los dados aleatorios
  function generarDados() {
    tablero.innerHTML = ""; // limpiamos tablero
    resultadoReal = []; // reiniciamos resultado real

    for (let i = 0; i < NUM_DADOS; i++) {
      const divDado = document.createElement("div");
      divDado.classList.add("dado");

      // Elegimos una cara al azar
      const cara = caras[Math.floor(Math.random() * caras.length)];
      divDado.textContent = cara;
      tablero.appendChild(divDado);

      // Guardamos para comprobar luego
      resultadoReal.push(cara);
    }

    console.log("Resultado real:", resultadoReal);
  }

  // Función que inicia la partida
  function iniciarPartida() {
    generarDados();

    // Ocultamos cortina y formulario al inicio
    cortina.classList.add("oculto");
    formulario.classList.add("oculto");

    // Tomamos el tiempo seleccionado y lo convertimos a ms
    const tiempo = parseInt(selectTiempo.value) * 1000;

    // Temporizador: cuando se acabe el tiempo, mostramos cortina y formulario
    setTimeout(() => {
      cortina.classList.remove("oculto"); // bajamos la cortina
      formulario.classList.remove("oculto"); // mostramos el formulario
      console.log("Tiempo terminado. Formulario visible.");
    }, tiempo);
  }

  // Evento click del botón de inicio
  btnStart.addEventListener("click", iniciarPartida);
});
