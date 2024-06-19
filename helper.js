function toggleFechaCaducidad() {
    const perecible = document.getElementById('perecible').value;
    const fechaCaducidadField = document.getElementById('fecha_caducidad_field');
    const fechaCaducidadInput = document.getElementById('fecha_caducidad');

    if (perecible === 'si') {
        // Mostrar el campo de fecha de caducidad
        fechaCaducidadField.classList.remove('hidden');
        
        // Establecer la fecha mínima como el día de hoy
        const today = new Date().toISOString().split('T')[0];
        fechaCaducidadInput.setAttribute('min', today);
    } else {
        fechaCaducidadField.classList.add('hidden');
        fechaCaducidadInput.removeAttribute('min');
    }
}

function limpiar() {
    document.getElementById('alimentoForm').reset();
    document.getElementById('fecha_caducidad_field').classList.add('hidden');
}

function soloNumeros(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}

function verificar(id) {
    // Implementar la lógica de verificación aquí
}

function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const perecible = document.getElementById('perecible').value;
    const caducidad = document.getElementById('fecha_caducidad').value;
    const categoria = document.getElementById('categoria').value;

    if (nombre === '' || fecha === '' || perecible === '' || cantidad === '' || categoria === '') {
        alert('Por favor, complete todos los campos.');
        return false; // Evita el envío del formulario
    }
    return true; // Permite el envío del formulario si todos los campos están completados
}

// Ejecutar la función al cargar la página para establecer las restricciones iniciales
window.onload = function() {
    const fechaCaducidadInput = document.getElementById('fecha_caducidad');
    const today = new Date().toISOString().split('T')[0];
    fechaCaducidadInput.setAttribute('min', today);
    
    const fechaIngresoInput = document.getElementById('fecha');
    fechaIngresoInput.setAttribute('max', today);
};
