// Diccionario de textos: permite cambiar entre español (es) e inglés (en) sin recargar.
const translations = {
  es: {
    navWork:"Proyectos",navServices:"Servicios",navAbout:"Sobre mí",navContact:"Contacto",letsTalk:"Hablemos",
    available:"DISPONIBLE PARA PROYECTOS SELECCIONADOS",heroEyebrow:"CREATIVIDAD CON INTENCIÓN",heroLine1:"Ideas que",heroLine2:"se mueven.",
    heroDescription:"Combino marketing digital, animación y desarrollo para crear experiencias que capturan miradas y convierten ideas en marcas memorables.",
    exploreWork:"Explorar proyectos",meetMe:"Conóceme",creativeFields:"DISCIPLINAS CREATIVAS",unifiedVision:"VISIÓN INTEGRADA",possibilities:"POSIBILIDADES",heroArtCaption:"ESTRATEGIA × MOVIMIENTO",scrollExplore:"DESLIZA PARA EXPLORAR",
    selectedWork:"TRABAJO SELECCIONADO",projectsTitle:"Ideas en acción.",projectsIntro:"Proyectos propios y conceptos creativos que exploran cómo conectar diseño, tecnología y objetivos de marca.",
    filterAll:"Todos (06)",filterReal:"Proyecto propio",filterConcept:"Conceptuales",categoryWeb:"DISEÑO WEB · UX/UI · DESARROLLO",dulceDesc:"Experiencias de invitación digital con diseño temático, interacción y enfoque mobile-first.",
    categoryCampaign:"DIRECCIÓN DE ARTE · CAMPAÑA",noirDesc:"Concepto de campaña para fragancia premium, pensado para contenido social y video corto.",categoryMotion:"MOTION GRAPHICS · 3D",
    moveDesc:"Estudio visual sobre energía, volumen y tipografía cinética para una marca deportiva ficticia.",categorySocial:"ESTRATEGIA SOCIAL · CONTENIDO",
    fieldDesc:"Dirección creativa para una campaña social conceptual enfocada en comunidad y crecimiento.",
    radixDesc:"Plataforma de capacitación para Radiología: autenticación, sesiones y acceso por roles. Proyecto en desarrollo; módulos avanzados en planificación.",
    arisDesc:"Sistema web para gestión de inventario con autenticación y roles; reportes, alertas y auditoría definidos como mejoras del proyecto.",
    projectDisclaimer:"Nota: NOIR, Move Beyond y Field Notes son conceptos ficticios, no campañas oficiales. Dulce Invitación es un proyecto propio. Radix HU y ARIS se presentan como proyectos de desarrollo en curso; las funciones indicadas como mejoras o planificación no deben confundirse con entregables finalizados.",
    belief:"MI FILOSOFÍA",manifestoTitle:"No se trata solo de verse bien.<br><em>Se trata de dejar huella.</em>",whatIDo:"QUÉ PUEDO APORTAR",
    servicesTitle:"Creatividad que<br><em>conecta disciplinas.</em>",servicesIntro:"Un perfil híbrido para equipos que necesitan pensar, diseñar y construir sin perder de vista el objetivo.",
    service1Title:"Marketing digital creativo",service1Desc:"Conceptos de campaña, contenido para redes, narrativa de marca y piezas orientadas a objetivos.",
    service2Title:"Motion design & animación",service2Desc:"Animación 2D/3D, gráficos en movimiento, composición y contenido audiovisual.",
    service3Title:"Diseño y desarrollo web",service3Desc:"Landing pages, experiencias interactivas y prototipos responsivos con HTML, CSS y JavaScript.",
    service4Title:"Contenido visual y storytelling",service4Desc:"Traduzco ideas complejas en mensajes visuales claros, atractivos y fáciles de recordar.",
    aboutEyebrow:"DE LA IDEA A LA EXPERIENCIA",aboutTitle:"Creativo por visión.<br><em>Ingenioso por método.</em>",
    aboutParagraph:"Soy profesional de Multimedia y Animación Digital con interés en unir estrategia, diseño, animación y tecnología. Me gusta transformar ideas en experiencias digitales con intención, desde la primera propuesta visual hasta su implementación.",
    aboutParagraph2:"Busco colaborar con agencias y equipos de marca que valoren la curiosidad, la experimentación y las ideas bien ejecutadas.",
    startConversation:"Empecemos una conversación",contactEyebrow:"EL SIGUIENTE CAPÍTULO",contactTitle:"¿Creamos algo<br><em>inolvidable?</em>",
    contactIntro:"Cuéntame qué quieres lograr. Exploremos cómo convertir esa idea en una experiencia que conecte con tu audiencia.",
    replaceEmail:"REEMPLAZA ESTE CORREO POR TU CONTACTO PROFESIONAL",footerText:"Hecho con intención.",backTop:"VOLVER ARRIBA"
  },
  en: {
    navWork:"Work",navServices:"Services",navAbout:"About",navContact:"Contact",letsTalk:"Let's talk",
    available:"AVAILABLE FOR SELECTED PROJECTS",heroEyebrow:"CREATIVITY WITH INTENTION",heroLine1:"Ideas that",heroLine2:"move.",heroDescription:"I combine digital marketing, animation and development to create experiences that capture attention and turn ideas into memorable brands.",
    exploreWork:"Explore projects",meetMe:"Meet me",creativeFields:"CREATIVE DISCIPLINES",unifiedVision:"ONE INTEGRATED VISION",possibilities:"POSSIBILITIES",heroArtCaption:"STRATEGY × MOTION",scrollExplore:"SCROLL TO EXPLORE",
    selectedWork:"SELECTED WORK",projectsTitle:"Ideas in action.",projectsIntro:"Independent work and creative concepts exploring how design, technology and brand goals can work together.",
    filterAll:"All (06)",filterReal:"Own project",filterConcept:"Concepts",categoryWeb:"WEB DESIGN · UX/UI · DEVELOPMENT",dulceDesc:"Digital invitation experiences combining themed design, interaction and a mobile-first approach.",
    categoryCampaign:"ART DIRECTION · CAMPAIGN",noirDesc:"A premium fragrance campaign concept designed for social content and short-form video.",categoryMotion:"MOTION GRAPHICS · 3D",
    moveDesc:"A visual study of energy, volume and kinetic typography for a fictional sports brand.",categorySocial:"SOCIAL STRATEGY · CONTENT",
    fieldDesc:"Creative direction for a conceptual social campaign focused on community and growth.",
    radixDesc:"Radiology training platform with authentication, sessions and role-based access. In development; advanced modules are planned.",
    arisDesc:"Web-based inventory management system with authentication and roles; reports, alerts and audit trails are defined as planned improvements.",
    projectDisclaimer:"Note: NOIR, Move Beyond and Field Notes are fictional concepts, not official campaigns. Dulce Invitación is an independent project. Radix HU and ARIS are presented as projects in development; planned enhancements should not be mistaken for completed deliverables.",
    belief:"MY PHILOSOPHY",manifestoTitle:"It’s not just about looking good.<br><em>It’s about leaving a mark.</em>",whatIDo:"WHAT I BRING",
    servicesTitle:"Creativity that<br><em>connects disciplines.</em>",servicesIntro:"A hybrid creative profile for teams that need to think, design and build without losing sight of the goal.",
    service1Title:"Creative digital marketing",service1Desc:"Campaign concepts, social content, brand storytelling and goal-oriented creative assets.",
    service2Title:"Motion design & animation",service2Desc:"2D/3D animation, motion graphics, compositing and audiovisual content.",
    service3Title:"Web design & development",service3Desc:"Landing pages, interactive experiences and responsive prototypes built with HTML, CSS and JavaScript.",
    service4Title:"Visual content & storytelling",service4Desc:"Turning complex ideas into clear, engaging and memorable visual messages.",
    aboutEyebrow:"FROM IDEA TO EXPERIENCE",aboutTitle:"Creative by vision.<br><em>Resourceful by design.</em>",
    aboutParagraph:"I’m a Multimedia and Digital Animation professional interested in bringing strategy, design, animation and technology together. I turn ideas into intentional digital experiences, from the first visual concept to implementation.",
    aboutParagraph2:"I’m looking to collaborate with agencies and brand teams that value curiosity, experimentation and thoughtful execution.",
    startConversation:"Let’s start a conversation",contactEyebrow:"THE NEXT CHAPTER",contactTitle:"Shall we create<br><em>something memorable?</em>",
    contactIntro:"Tell me what you want to achieve. Let’s explore how to turn that idea into an experience that connects with your audience.",
    replaceEmail:"REPLACE THIS EMAIL WITH YOUR PROFESSIONAL CONTACT",footerText:"Made with intention.",backTop:"BACK TO TOP"
  }
};

// Idioma inicial del portafolio.
let currentLanguage = "es";
const languageToggle = document.getElementById("languageToggle");
// Actualiza textos, atributo lang y etiqueta del botón de idioma.
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  languageToggle.innerHTML = language === "es" ? 'EN <span>↗</span>' : 'ES <span>↗</span>';
  languageToggle.setAttribute("aria-label", language === "es" ? "Switch to English" : "Cambiar a español");
}
// Alterna el idioma al pulsar el control ES/EN.
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "es" ? "en" : "es"));

// Menú móvil: se abre/cierra y se oculta al elegir una sección.
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Filtros de proyectos: muestran todos, proyectos propios o conceptos ficticios.
document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.type !== filter;
    });
  });
});

// Animación de entrada al desplazarse: cada elemento se anima una sola vez al entrar en pantalla.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

// Brillo sutil que sigue el cursor en dispositivos con puntero preciso.
const cursorGlow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", event => {
  if (window.matchMedia("(pointer: fine)").matches) {
    cursorGlow.style.left = `${event.clientX}px`;
    cursorGlow.style.top = `${event.clientY}px`;
  }
}, { passive: true });

// Mantiene actualizado el año del pie de página automáticamente.
document.getElementById("year").textContent = new Date().getFullYear();
