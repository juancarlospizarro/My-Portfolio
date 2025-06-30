const translations = {
  es: {
    title: "Mi portfolio - Juan Carlos Pizarro",
    perfil_titulo: "Ingeniero de Datos y Desarrollador Web",
    sobremi_titulo: "Sobre mí",
    sobremi_texto: "Estudiante de Desarrollo de Aplicaciones Web con nota media de 9,75 y experiencia práctica como becario de Big Data en Ayesa, donde trabajé con Apache Spark, Scala y SQL. Me apasionan los datos, el backend y la automatización de procesos. Busco seguir desarrollándome como ingeniero de datos o desarrollador web, con interés en oportunidades Erasmus+ o puestos junior en Europa.",
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
    title: "My portfolio - Juan Carlos Pizarro",
    perfil_titulo: "Data Engineer and Web Developer",
    sobremi_titulo: "About me",
    sobremi_texto: "Web Application Development student with an average grade of 9.75 and hands-on experience as a Big Data intern at Ayesa, where I worked with Apache Spark, Scala, and SQL. I'm passionate about data, backend development, and process automation. I'm looking to continue growing as a data engineer or web developer, with interest in Erasmus+ opportunities or junior positions in Europe.",
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
    title: "Mon portfolio - Juan Carlos Pizarro",
    perfil_titulo: "Ingénieur de Données et Développeur Web",
    sobremi_titulo: "À propos de moi",
    sobremi_texto: "Étudiant en développement d'applications web avec une moyenne de 9,75 et une expérience pratique en tant que stagiaire en Big Data chez Ayesa, où j’ai travaillé avec Apache Spark, Scala et SQL. Passionné par les données, le développement backend et l'automatisation des processus. Je souhaite continuer à évoluer comme ingénieur en données ou développeur web, avec un intérêt pour les opportunités Erasmus+ ou les postes juniors en Europe.",
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
    title: "Mein portfolio - Juan Carlos Pizarro",
    perfil_titulo: "Dateningenieur und Webentwickler",
    sobremi_titulo: "Über mich",
    sobremi_texto: "Student für Webanwendungsentwicklung mit einem Notendurchschnitt von 9,75 und praktischer Erfahrung als Big Data-Praktikant bei Ayesa, wo ich mit Apache Spark, Scala und SQL gearbeitet habe. Ich begeistere mich für Daten, Backend-Entwicklung und Prozessautomatisierung. Ich suche nach Möglichkeiten, mich weiter als Data Engineer oder Webentwickler zu entwickeln – idealerweise durch Erasmus+-Programme oder Junior-Positionen in Europa.",
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