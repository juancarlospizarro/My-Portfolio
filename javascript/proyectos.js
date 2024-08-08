var proyecto = document.querySelectorAll('.proyecto');

        // Define la función del manejador de eventos
        function mostrarAlerta() {
            alert('La página de información de cada proyecto no está aún implementada.');
        }

        // Asigna el manejador de eventos a la imagen y al texto
        coche.forEach(function(elemento) {
            elemento.addEventListener('click', mostrarAlerta);
        });