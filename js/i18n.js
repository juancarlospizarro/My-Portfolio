const translations = {
  es: {
    title: "Mi Portafolio",
    perfil_titulo: "Ingeniero de Datos y Desarrollador Web",
    sobremi_titulo: "Sobre mí",
    sobremi_texto: "Hola, aqui va el sobre mi.",
    experiencia_titulo: "Experiencia",
    formacion_titulo: "Formación",
    becario_ayesa: "Becario en Big Data",
    daw: "Desarrollo de Aplicaciones Web",
    ingenieria: "Ingeniería Informática - Tecnologías Informáticas",
    certificaciones_titulo: "Certificaciones",
    certificacion1: "Certificación 1",
    certificacion2: "Certificación 2",
    proyectos_titulo: "Proyectos",
    proyecto1: "Proyecto 1",
    proyecto2: "Proyecto 2",
    footer: "Página web creada con HTML, CSS y JavaScript."
  },
  en: {
    title: "My Portfolio",
    perfil_titulo: "Data Engineer and Web Developer",
    sobremi_titulo: "About me",
    sobremi_texto: "Hi, here's the about me section.",
    experiencia_titulo: "Experience",
    formacion_titulo: "Education",
    becario_ayesa: "Intern in Big Data",
    daw: "Web Application Development",
    ingenieria: "Computer Engineering – Information Technologies",
    certificaciones_titulo: "Certifications",
    certificacion1: "Certification 1",
    certificacion2: "Certification 2",
    proyectos_titulo: "Projects",
    proyecto1: "Project 1",
    proyecto2: "Project 2",
    footer: "Website created with HTML, CSS, and JavaScript."
  },
  fr: {
    title: "Mon Portfolio",
    perfil_titulo: "Ingénieur de Données et Développeur Web",
    sobremi_titulo: "À propos de moi",
    sobremi_texto: "Bonjour, voici la section à propos de moi.",
    experiencia_titulo: "Expérience",
    formacion_titulo: "Formation",
    becario_ayesa: "Stagiaire en Big Data",
    daw: "Développement d'applications web",
    ingenieria: "Génie informatique – Technologies de l'information",
    certificaciones_titulo: "Certifications",
    certificacion1: "Certification 1",
    certificacion2: "Certification 2",
    proyectos_titulo: "Projets",
    proyecto1: "Projet 1",
    proyecto2: "Projet 2",
    footer: "Site web créé avec HTML, CSS et JavaScript."
  },
  de: {
    title: "Mein Portfolio",
    perfil_titulo: "Dateningenieur und Webentwickler",
    sobremi_titulo: "Über mich",
    sobremi_texto: "Hallo, hier ist der Abschnitt über mich.",
    experiencia_titulo: "Erfahrung",
    formacion_titulo: "Ausbildung",
    becario_ayesa: "Praktikant im Bereich Big Data",
    daw: "Webanwendungsentwicklung",
    ingenieria: "Informatik – Informationstechnologien",
    certificaciones_titulo: "Zertifizierungen",
    certificacion1: "Zertifizierung 1",
    certificacion2: "Zertifizierung 2",
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