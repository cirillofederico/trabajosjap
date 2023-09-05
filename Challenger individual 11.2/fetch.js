
const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (event) {

    event.preventDefault(); // Evitamos que el formulario se envie por defecto 

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;


    // definimos un arreglo de los datos a mostrar
    var datosFormulario = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
    };

    // Enviamos los datos al servidor en formato json usando el método post
    try{
            fetch('https://jsonplaceholder.typicode.com/users', {   //iniciamos la solicitud http
               
            //Especificamos condiciones de solicitud
                method: 'POST',           
                headers: {              
                    'Content-Type': 'application/json' //Los datos que se envían están en formato json, esto permite al servidor interpretarlos
                }, 
                body: JSON.stringify(datosFormulario) //Convertimos los datos a formato json válidos
            })
            //Tomamos la respuesta
            .then(response => response.json())
            .then(data => {
                console.log('Respuesta del servidor:', data); //Mostramos la data en consola
            })
        }
    catch (error) {
            console.error('Error:', error);}  //Sino, mostramos error en consola
          
});