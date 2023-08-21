document.getElementById("buttonText").addEventListener("click", () => {
    const nombre = document.getElementById("inputText").value;
    localStorage.setItem("nombre", nombre);} );