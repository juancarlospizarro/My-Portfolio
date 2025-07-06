document.getElementById('year').textContent = new Date().getFullYear();

emailjs.init("KlnE6-nOAlaYk7b96");

function showAlert(type, message) {
  const container = document.getElementById('alert-container');
  if (!container) return;

  const alertDiv = document.createElement('div');
  alertDiv.classList.add('alert');
  alertDiv.classList.add(type === 'success' ? 'alert-success' : 'alert-error');

  alertDiv.textContent = message;

  container.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.opacity = '0';
    setTimeout(() => container.removeChild(alertDiv), 300);
  }, 3000);
}


  // 2) Espera a que el DOM esté listo, por si tu script está en <head>
  document.addEventListener("DOMContentLoaded", () => {

    // 3) Selecciona el formulario
    const form = document.getElementById("form-contacto");

    // 4) Escucha el evento submit
    form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
      .sendForm("service_mey3jxv", "template_zu1yz3d", this)
      .then(() => {
        showAlert('success', 'Mensaje enviado correctamente.');
        form.reset();
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        showAlert('error', 'Error al enviar el mensaje.');
      });
    });

     const cards = document.querySelectorAll('.proyecto');
  const botones = document.querySelectorAll('.filtro');

  botones.forEach(btn => {
    btn.addEventListener('click', () => {
      // 1. Actualiza estado visual del botón
      botones.forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');

      // 2. Filtra
      const filtro = btn.dataset.filter; // "web", "bigdata" o "all"
      cards.forEach(card => {
        const cats = card.dataset.cat.split(',');
        const show = filtro === 'all' || cats.includes(filtro);
        card.style.display = show ? 'flex' : 'none'; // "flex" para mantener tu layout
      });

      // 3. Opcional: guarda el filtro en la URL (#web) para compartir enlaces
      history.replaceState(null, '', filtro === 'all' ? '#proyectos' : `#${filtro}`);
    });
  });

  // Si el usuario llega con #web o #bigdata ya aplicado
  const hash = location.hash.replace('#', '');
  const firstBtn = [...botones].find(b => b.dataset.filter === hash);
  if (firstBtn) firstBtn.click();
   
  });
