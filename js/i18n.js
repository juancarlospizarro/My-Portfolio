const translations = {
  es: {
    title: "Mi Portafolio",
    sobremi_titulo: "Sobre mí",
    experiencia_titulo: "Experiencia",
    formacion_titulo: "Formación",
    proyectos_titulo: "Proyectos",
    footer: "Página web creada con HTML, CSS y JavaScript."
  },
  en: {
    title: "My Portfolio",
    sobremi_titulo: "About me",
    experiencia_titulo: "Experience",
    formacion_titulo: "Education",
    proyectos_titulo: "Projects",
    footer: "Website created with HTML, CSS, and JavaScript."
  },
  fr: {
    title: "Mon Portfolio",
    sobremi_titulo: "À propos de moi",
    experiencia_titulo: "Expérience",
    formacion_titulo: "Formation",
    proyectos_titulo: "Projets",
    footer: "Site web créé avec HTML, CSS et JavaScript."
  },
  de: {
    title: "Mein Portfolio",
    sobremi_titulo: "Über mich",
    experiencia_titulo: "Erfahrung",
    formacion_titulo: "Ausbildung",
    proyectos_titulo: "Projekte",
    footer: "Website erstellt mit HTML, CSS und JavaScript."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(e => {
    const key = e.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      e.textContent = translations[lang][key];
    }
  });
}