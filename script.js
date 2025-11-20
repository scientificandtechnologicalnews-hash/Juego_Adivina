document.addEventListener("DOMContentLoaded", () => {
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");
  const selectTiempo = document.getElementById("tiempo");
  const cortina = document.getElementById("cortina");
  console.log("¿Cortina encontrada?:", cortina);

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

  function iniciarPartida() {
    generarDados();
    cortina.classList.add("oculto"); // quitamos la cortina al inicio
    const tiempo = parseInt(selectTiempo.value) * 1000; // segundos a milisegundos

    // Temporizador para mostrar la cortina
    setTimeout(() => {
      cortina.classList.remove("oculto");
      console.log("Tiempo terminado. ¡Recuerda los dados!");
    }, tiempo);
  }

  btnStart.addEventListener("click", iniciarPartida);
});
