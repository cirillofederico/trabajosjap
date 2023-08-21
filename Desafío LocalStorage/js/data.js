const nombreAlmacenado = localStorage.getItem("nombre");
const nombreSpan = document.getElementById("data");

if (nombreAlmacenado) {
  nombreSpan.textContent = nombreAlmacenado;
} else {
  nombreSpan.textContent = "no se guardo datos.";
}