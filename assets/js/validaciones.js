var nombre = document.getElementById('nombre');
var rut = document.getElementById('rut')
var error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario() {
    console.log('Enviando formulario,,,');
    var mensajeError = [];
    if (nombre.value === null || nombre.value === '') {
        mensajeError.push('Ingresa tu nombre');
    }

    if (rut.value === null || nombre.value === '') {
        mensajeError.push('Ingresa tu rut');
    }

    error.innerHTML = mensajeError.join(', ');
    return false;

}