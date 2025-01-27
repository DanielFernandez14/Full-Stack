document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    // Prevenir el envío del formulario
    event.preventDefault();

    // Variables para controlar la validación
    let esValido = true;

    // Limpiar mensajes de error previos
    document.querySelectorAll('.error').forEach(function(span) {
        span.textContent = '';
    });

    // Validar Email
    const email = document.getElementById('email').value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '') {
        mostrarError('errorEmail', 'El campo "Email" es obligatorio.');
        esValido = false;
    } else if (!emailRegex.test(email)) {
        mostrarError('errorEmail', 'Por favor, ingresa un correo electrónico válido.');
        esValido = false;
    }

    // Validar Asunto
    const asunto = document.getElementById('asunto').value.trim();
    if (asunto === '') {
        mostrarError('errorAsunto', 'El campo "Asunto" es obligatorio.');
        esValido = false;
    }

    // Validar DNI
    const dni = document.getElementById('dni').value.trim();
    if (dni === '') {
        mostrarError('errorDni', 'El campo "DNI" es obligatorio.');
        esValido = false;
    } else if (!/^\d+$/.test(dni)) {
        mostrarError('errorDni', 'El DNI debe contener solo números.');
        esValido = false;
    }

    // Validar Mensaje
    const mensaje = document.getElementById('mensaje').value.trim();
    if (mensaje === '') {
        mostrarError('errorMensaje', 'El campo "Mensaje" es obligatorio.');
        esValido = false;
    }

    // Si todo es válido, enviar el formulario
    if (esValido) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar la lógica para enviar el formulario, por ejemplo:
        // this.submit();
    }
});

function mostrarError(idElemento, mensaje) {
    document.getElementById(idElemento).textContent = mensaje;
}