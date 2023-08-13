function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}



document.getElementById('regBtn').addEventListener('click', function(event) {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    if (  nombre === '' || apellido === '' || email === '' || password1 === '' ||password2 === '' ||
        !terminos || password1.length < 6 || password1 !== password2) {
        event.preventDefault(); 
        showAlertError();
        return;
    }   
    showAlertSuccess();
});

function showAlertError() {
    alert("Por favor, completa todos los campos del formulario correctamente.");
}

function showAlertSuccess() {
    alert("Formulario enviado correctamente.");
}















/* document.getElementById('regBtn').addEventListener('click', function(event) {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    if (nombre === '' || apellido === '' || email === '' || 
    password1=== '' || password2=== '' || !terminos || password1.lenght < 6 || password2 != password2) {
        event.preventDefault(); // Evita que el formulario se envíe
        showAlertError();
        return;
    }   
    showAlertSuccess()   



});

*/