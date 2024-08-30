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

var boton = document.querySelectorAll('.boton_funcionalidad');

// Define la función del manejador de eventos
function mostrarAlerta(event) {
    event.preventDefault()
    alert('Funcionalidad no implementada.');
}

// Asigna el manejador de eventos a cada elemento
boton.forEach(function(elemento) {
    // Verifica si el atributo 'href' está vacío
    if (elemento.getAttribute('id') === 'cambio_idioma') {
        elemento.addEventListener('click', mostrarAlerta);
    } 
});

function filterProyectos(category, button) {
    const categorias = document.querySelectorAll('.categoria');
    const buttons = document.querySelectorAll('.buttons button');

    categorias.forEach(categoria => {
        if (category === 'todos') {
            categoria.style.display = 'block';
        } else {
            if (categoria.classList.contains(category)) {
                categoria.style.display = 'block';
            } else {
                categoria.style.display = 'none';
            }
        }
    });

    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Añadir la clase 'active' al botón seleccionado
    button.classList.add('active');
}

const button = document.getElementById('boton_oscuro');

button.addEventListener('click', function() {
    document.body.classList.toggle('oscuro');
});

document.getElementById("boton_oscuro").addEventListener("click", function() {
    const icono = document.getElementById("icono_modo");

    // Verificamos el icono actual y lo cambiamos
    if (icono.classList.contains("bi-moon")) {
        
        icono.classList.remove("bi-moon");
        icono.classList.add("bi-brightness-high");
    } else {
        icono.classList.remove("bi-brightness-high");
        icono.classList.add("bi-moon");
    }
});

