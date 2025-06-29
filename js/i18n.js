const translations = {
  es: {
    title: "Mi Portafolio",
    sobremi_titulo: "Sobre mí",
    experiencia_titulo: "Experiencia",
    formacion_titulo: "Formación",
    becario_ayesa: "Becario en Big Data",
    daw: "Desarrollo de Aplicaciones Web",
    ingenieria: "Ingeniería Informática - Tecnologías Informáticas",
    proyectos_titulo: "Proyectos",
    proyecto1: "Proyecto 1",
    proyecto2: "Proyecto 2",
    footer: "Página web creada con HTML, CSS y JavaScript."
  },
  en: {
    title: "My Portfolio",
    sobremi_titulo: "About me",
    experiencia_titulo: "Experience",
    formacion_titulo: "Education",
    becario_ayesa: "Intern in Big Data",
    daw: "Web Application Development",
    ingenieria: "Computer Engineering – Information Technologies",
    proyectos_titulo: "Projects",
    proyecto1: "Project 1",
    proyecto2: "Project 2",
    footer: "Website created with HTML, CSS, and JavaScript."
  },
  fr: {
    title: "Mon Portfolio",
    sobremi_titulo: "À propos de moi",
    experiencia_titulo: "Expérience",
    formacion_titulo: "Formation",
    becario_ayesa: "Stagiaire en Big Data",
    daw: "Développement d'applications web",
    ingenieria: "Génie informatique – Technologies de l'information",
    proyectos_titulo: "Projets",
    proyecto1: "Projet 1",
    proyecto2: "Projet 2",
    footer: "Site web créé avec HTML, CSS et JavaScript."
  },
  de: {
    title: "Mein Portfolio",
    sobremi_titulo: "Über mich",
    experiencia_titulo: "Erfahrung",
    formacion_titulo: "Ausbildung",
    becario_ayesa: "Praktikant im Bereich Big Data",
    daw: "Webanwendungsentwicklung",
    ingenieria: "Informatik – Informationstechnologien",
    proyectos_titulo: "Projekte",
    proyecto1: "Projekt 1",
    proyecto2: "Projekt 2",
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