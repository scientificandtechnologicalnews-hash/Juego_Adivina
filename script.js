// ====================================================================
// VARIABLES GLOBALES
// ====================================================================
let generatedSymbols = []; // Guardará los símbolos que aparecen en los dados
let curtain = null; // Referencia a la cortina
let formContainer = null; // Contenedor del formulario

// ====================================================================
// FUNCIÓN: Mostrar los dados (por ejemplo, cuando empieza el juego)
// ====================================================================
function showDice() {
  // EJEMPLO DE SÍMBOLOS (cámbialos por los que tú uses)
  const possibleSymbols = ["★", "✿", "❖", "◆", "●", "▲"];

  // Generamos tres símbolos aleatorios (uno por cada dado)
  generatedSymbols = [
    possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
    possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
    possibleSymbols[Math.floor(Math.random() * possibleSymbols.length)],
  ];

  // Pintamos los símbolos en pantalla
  document.getElementById("dice1").textContent = generatedSymbols[0];
  document.getElementById("dice2").textContent = generatedSymbols[1];
  document.getElementById("dice3").textContent = generatedSymbols[2];

  console.log("Símbolos mostrados:", generatedSymbols);
}

// ====================================================================
// FUNCIÓN: Bajar la cortina y mostrar el formulario cuando termina el tiempo
// ====================================================================
function lowerCurtain() {
  curtain = document.getElementById("curtain");
  formContainer = document.getElementById("form-container");

  // Añadimos la clase para activar la animación CSS
  curtain.classList.add("active");

  // Esperamos el tiempo de la animación antes de mostrar el formulario
  setTimeout(() => {
    formContainer.style.display = "block";
  }, 1200);
}

// ====================================================================
// FUNCIÓN: Comprobar resultados cuando el usuario envía el formulario
// ====================================================================
function checkResult(event) {
  event.preventDefault(); // Evita que la página recargue

  // Recogemos los valores del formulario
  const user1 = document.getElementById("answer1").value.trim();
  const user2 = document.getElementById("answer2").value.trim();
  const user3 = document.getElementById("answer3").value.trim();

  let score = 0;

  if (user1 === generatedSymbols[0]) score++;
  if (user2 === generatedSymbols[1]) score++;
  if (user3 === generatedSymbols[2]) score++;

  alert(`Has acertado ${score} de 3`);

  // (Opcional) Resetear para volver a jugar
  formContainer.style.display = "none";
  curtain.classList.remove("active");
}

// ====================================================================
// EVENTO PRINCIPAL AL CARGAR LA PÁGINA
// ====================================================================
window.onload = function () {
  showDice();

  // Si tienes un botón para bajar la cortina, conéctalo así:
  const btn = document.getElementById("startButton");
  if (btn) {
    btn.addEventListener("click", lowerCurtain);
  }

  const form = document.getElementById("memory-form");
  if (form) {
    form.addEventListener("submit", checkResult);
  }
};
