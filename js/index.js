document.getElementById('year').textContent = new Date().getFullYear();


  const form = document.getElementById('form-contacto');
  const statusMsg = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validación básica
    let isValid = true;
    const inputs = form.querySelectorAll('input, textarea');
    const errorMsgs = form.querySelectorAll('.error-msg');
    errorMsgs.forEach(msg => msg.textContent = "");

    inputs.forEach(input => {
      if (!input.checkValidity()) {
        isValid = false;
        input.nextElementSibling.textContent = 'Este campo es obligatorio o inválido.';
      }
    });

    if (!isValid) return;

    // Simular envío
    statusMsg.textContent = "Enviando mensaje...";
    statusMsg.style.color = "black";

    setTimeout(() => {
      statusMsg.textContent = "¡Mensaje enviado correctamente!";
      statusMsg.style.color = "green";
      form.reset();
    }, 1500);
  });
