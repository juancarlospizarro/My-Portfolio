var proyecto = document.querySelectorAll('.enlace_proyecto');

        // Define la función del manejador de eventos
        function mostrarAlerta() {
            alert('La página de información de cada proyecto no está aún implementada.');
        }

        // Asigna el manejador de eventos a la imagen y al texto
        proyecto.forEach(function(elemento) {
            elemento.addEventListener('click', mostrarAlerta);
        });