document.addEventListener('DOMContentLoaded', function() {
    // Obtener parámetros de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const proyectoId = urlParams.get('id');

    // Datos de ejemplo para los proyectos
    const proyectos = {
        1: {
            titulo: "Final Euro 2024",
            descripcion: "Análisis de datos del torneo Euro 2024.",
        },
        2: {
            titulo: "Sports Cars",
            descripcion: "Desarrollo web para una galería de autos deportivos.",
        },
        3: {
            titulo: "Proyecto 3",
            descripcion: "Un proyecto de análisis de datos avanzado.",
        }

       
    };

    // Cargar contenido basado en el ID del proyecto
    const proyecto = proyectos[proyectoId];
    if (proyecto) {
        document.getElementById('titulo-proyecto').textContent = proyecto.titulo;
        document.getElementById('descripcion-proyecto').textContent = proyecto.descripcion;

        

    } else {
        document.getElementById('titulo-proyecto').textContent = "Proyecto no encontrado";
        document.getElementById('descripcion-proyecto').textContent = "No se ha encontrado información para el proyecto solicitado.";

    }
});


