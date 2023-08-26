// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];



//edite la funcion para que ya haga todo
function showList(array) {
  const container = document.getElementById("list"); 
  container.innerHTML = "";   
  const elementosDeTexto = array.filter((element) => typeof element === "string").sort((a,b)=> {return a.localeCompare(b)});
  elementosDeTexto.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}


document.addEventListener("DOMContentLoaded", (e) => {
   showList(strangeArray);
});


// la linea 33 crea una constante "elementosDeTexto", y le da el array filtrado con elementos string
// y con esos elementos filtrados alfabticamente con la sugerencia sort(a,b) que dio el profesor
// en la  clase del 21/8 minuto 59 de la grabación.
