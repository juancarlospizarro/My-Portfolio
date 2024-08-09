document.querySelectorAll('.enlace_proyecto').forEach(function(enlace) {
    enlace.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que el enlace redirija inmediatamente
        alert('La página de cada proyecto aun no está implementada.');
    });
});