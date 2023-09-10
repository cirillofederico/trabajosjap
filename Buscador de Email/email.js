

document.addEventListener('DOMContentLoaded', () => {  //Funcion general para cuando la página esta cargada.
    const btnBuscar = document.getElementById('btnBuscar');
    const contenedor = document.getElementById('contenedor');
    const url = 'https://jsonplaceholder.typicode.com/users'; 


        // Funcion que trae datos de la API.
    function funcionExtraccion() { 
        const entradaBuscar = document.getElementById('entradaBuscar');
        fetch(url)
            .then(response => response.json())
            //Llamamos a la funcion mostrarDatos con la respuesta del fetch y la entrada en minúsculas
            .then(datoArreglo => mostrarDatos(datoArreglo, entradaBuscar.value.toLowerCase()))  
            .catch(error => console.error("error al extraer datos:", error));
    }

    // Función que se activa con el click botón.
    btnBuscar.addEventListener("click", () => {
        funcionExtraccion();
    });

    // Función que se activa al presionar Enter.
    entradaBuscar.addEventListener("keyup", function (evento) {
        if (evento.key === "Enter") {
            funcionExtraccion(); // Llama a la función de búsqueda cuando se presiona "Enter"
        }
    });


    // Función que muestra el email correspondiente al nombre ingresado.
    function mostrarDatos(datoArreglo, encontrarNombre) {
        contenedor.innerHTML = "";
        //Buscamos en el contenido la existencia del elemento tambien en miniscula.
        const usuario = datoArreglo.find(element => element.username.toLowerCase() === encontrarNombre);  

        if (usuario) {
            const email = usuario.email;
            contenedor.innerHTML = `Email: ${email}`;
        } else {
            contenedor.innerHTML = "Nombre no encontrado.";
        }
    }
});


