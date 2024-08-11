// Selecciona todos los elementos con la clase 'enlace_proyecto'
var proyecto = document.querySelectorAll('.enlace_proyecto');

// Define la función del manejador de eventos
function mostrarAlerta(event) {
    event.preventDefault()
    alert('La página de información de este proyecto no está aún implementada.');
}

// Asigna el manejador de eventos a cada elemento
proyecto.forEach(function(elemento) {
    // Verifica si el atributo 'href' está vacío
    if (elemento.getAttribute('href') === '') {
        elemento.addEventListener('click', mostrarAlerta);
    } 
});


