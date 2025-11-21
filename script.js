document.addEventListener("DOMContentLoaded", () => {
  // Elementos del DOM
  const tablero = document.getElementById("tablero");
  const btnStart = document.getElementById("btnStart");
  const selectTiempo = document.getElementById("tiempo");
  const cortina = document.getElementById("cortina");
  const formulario = document.getElementById("formulario");
  const btnCorregir = document.getElementById("btnCorregir");
  const resultadoDiv = document.getElementById("resultado");
  const btnReiniciar = document.getElementById("btnReiniciar");

  const NUM_DADOS = 10;
  const caras = ["🎵", "🎨", "🔤", "🔣", "🔢", "🐾"];
  let resultadoReal = [];

  // ====================================
  // GENERAR DADOS
  // ====================================
  function generarDados() {
    tablero.innerHTML = "";
    resultadoReal = [];

    for (let i = 0; i < NUM_DADOS; i++) {
      const dado = document.createElement("div");
      dado.classList.add("dado");

      const cara = caras[Math.floor(Math.random() * caras.length)];
      dado.textContent = cara;

      tablero.appendChild(dado);
      resultadoReal.push(cara);
    }

    console.log("Resultado real:", resultadoReal);
  }

  // ====================================
  // CORREGIR RESPUESTAS
  // ====================================
  function corregirRespuestas() {
    // Contar cuántas veces apareció cada símbolo
    const conteo = { "🎵": 0, "🎨": 0, "🔤": 0, "🔣": 0, "🔢": 0, "🐾": 0 };
    resultadoReal.forEach((c) => conteo[c]++);

    let puntos = 0;
    let mensajes = "";

    // Leer valores del formulario
    const respuestas = {
      "🎵": parseInt(document.getElementById("respuesta-notas").value) || 0,
      "🎨": parseInt(document.getElementById("respuesta-colores").value) || 0,
      "🔤": parseInt(document.getElementById("respuesta-letras").value) || 0,
      "🔣": parseInt(document.getElementById("respuesta-simbolos").value) || 0,
      "🔢": parseInt(document.getElementById("respuesta-primos").value) || 0,
      "🐾": parseInt(document.getElementById("respuesta-animales").value) || 0,
    };

    for (const cara in respuestas) {
      if (respuestas[cara] === conteo[cara]) {
        puntos++;
        mensajes += `✔ ${cara} Correcto (${respuestas[cara]})<br>`;
      } else {
        mensajes += `✘ ${cara} Incorrecto. Tu respuesta: ${respuestas[cara]}, Real: ${conteo[cara]}<br>`;
      }
    }

    // Mostrar resultado
    resultadoDiv.classList.remove("oculto");
    resultadoDiv.innerHTML = `<strong>Puntos obtenidos: ${puntos} / 6</strong><br>${mensajes}`;
  }

  // ====================================
  // INICIAR PARTIDA
  // ====================================
  function iniciarPartida() {
    generarDados();

    // Ocultar cortina, formulario y resultado al iniciar
    cortina.classList.add("oculto");
    formulario.classList.add("oculto");
    resultadoDiv.classList.add("oculto");

    const tiempo = parseInt(selectTiempo.value) * 1000;

    // Mostrar cortina y formulario cuando se acabe el tiempo
    setTimeout(() => {
      cortina.classList.remove("oculto");
      formulario.classList.remove("oculto");
      console.log("Fin del tiempo → mostrar formulario");
    }, tiempo);
  }

  // ====================================
  // EVENTOS
  // ====================================
  btnStart.addEventListener("click", iniciarPartida);
  btnCorregir.addEventListener("click", corregirRespuestas);
});

//Reiniciar partida
function reiniciarPartida() {
  console.log("Reiniciando partida...");
  iniciarPartida(); // reutiliza la función existente
}
btnReiniciar.addEventListener("click", reiniciarPartida);
