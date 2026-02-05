// src/data/collections.ts
import { z } from 'zod';
import { projectSchema, languageSchema, experienceSchema } from './schemas';

// Define los tipos de datos a partir de los schemas
export type Project = z.infer<typeof projectSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Experience = z.infer<typeof experienceSchema>;

export const languages: Language[] = [
  {
    id: 1,
    name: "Frontend",
    icon: {
      name: "frontend",
      classes: "text-purple-600"
    },
    description: "Tecnologías para crear interfaces de usuario modernas y responsivas",
    technologies: [
      { name: "HTML", icon: "html", classes: "text-orange-500" },
      { name: "CSS", icon: "css", classes: "text-blue-500" },
      { name: "Bootstrap", icon: "bootstrap", classes: "text-purple-800" },
      { name: "Tailwind", icon: "tailwind", classes: "text-blue-400" },
      { name: "JavaScript", icon: "javascript", classes: "text-yellow-400" },
      { name: "TypeScript", icon: "typescript", classes: "text-blue-500" },
      { name: "jQuery", icon: "jquery", classes: "text-blue-600" },
      { name: "Angular", icon: "angular", classes: "text-red-600" },
      { name: "React", icon: "react", classes: "text-blue-400" },
      { name: "Wordpress", icon: "wordpress", classes: "text-blue-500" },
    ]
  },
  {
    id: 2,
    name: "Backend",
    icon: {
      name: "backend",
      classes: "text-gray-300"
    },
    description: "Herramientas para desarrollo del lado del servidor y APIs",
    technologies: [
      { name: "PHP", icon: "php", classes: "text-blue-700" },
      { name: "Laravel", icon: "laravel", classes: "text-red-600" },
      { name: "Python", icon: "python", classes: "text-blue-400" },
      { name: "FastAPI", icon: "fastapi", classes: "text-green-300" },
      { name: "Django", icon: "django", classes: "text-green-400" },
      { name: "Java", icon: "java", classes: "text-red-600" },
      { name: "Docker", icon: "docker", classes: "text-blue-700" }
    ]
  },
  {
    id: 3,
    name: "Bases de Datos & Sistemas",
    icon: {
      name: "systems",
      classes: "text-gray-500"
    },
    description: "Gestión de datos y administración de sistemas",
    technologies: [
      { name: "MySQL", icon: "mysql", classes: "text-blue-800" },
      { name: "PostgreSQL", icon: "postgresql", classes: "text-blue-800" },
      { name: "Ubuntu", icon: "ubuntu", classes: "text-orange-500" },
      { name: "RHEL", icon: "redhat", classes: "text-red-700" },
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
      company: "Cootransfusa",
      position: "Desarrollador Full Stack y Auxiliar de Sistemas",
      duration: "2023 - 2025",
      responsibilities: [
        "Desarrollé, implementé y mantuve 15 aplicaciones de software principalmente usando HTML, CSS, Bootstrap, JavaScript, jQuery, PHP y MySQL.",
        "Colaboré en el desarrollo y gestión de 5 bases de datos corporativas integradas con las aplicaciones de software.",
        "Creé scripts personalizados para tareas automatizadas que ahorraron entre 1 y 2 días de tiempo de trabajo cada semana y al mismo tiempo redujeron el error humano.",
        "Configuré y administré 10 servidores junto con aproximadamente 5 máquinas virtuales en cada uno, las cuales se ejecutaban en diversas versiones de sistemas operativos Windows y Linux.",
        "Desarrollé manuales de usuario y materiales de capacitación para nuevas funciones del sistema, mejorando las tasas de adopción por parte de los usuarios.",
        "Ejecuté aproximadamente 300 copias de seguridad de diferentes bases de datos.",
        "Gestioné el funcionamiento de los sistemas ERP y operativo para la gestión financiera y administrativa.",
        "Instalé y gestioné antivirus y parches de seguridad en apróximadamente el 80% de los equipos activos.",
      ],
  },
  {
    id: 2,
    company: "Jacktek",
    position: "Técnico de soporte TI",
    duration: "2021 - 2023",
    responsibilities: [
      "Contribuí a proyectos desde el diseño hasta la implementación funcional utilizando HTML, CSS, JavaScript y PHP.",
      "Colaboré con los miembros del equipo para agilizar los procesos de resolución de problemas y mejorar los tiempos de respuesta.",
      "Ejecuté aproximadamente 100 copias de seguridad de información almacenada en diferentes bases de datos.",
      "Asistí a los usuarios con la instalación y configuración del software, garantizando una funcionalidad óptima en toda la organización.",
      "Desarrollé documentación integral para los procesos de soporte, lo que permitió una resolución de problemas más rápida para los miembros del equipo de soporte técnico.",
    ],
  }
];

export const projects = [
  {
    id: 1,
    name: "Mindraft",
    image: "projects/mindraft.png",
    category: "Aplicación Web",
    status: "En desarrollo",
    description: "Aplicación moderna para tomar notas que permite a los usuarios crear, editar y organizar apuntes dentro de diferentes cuadernos. El objetivo del proyecto es ofrecer una interfaz sencilla e intuitiva para gestionar información personal, ideas, notas de estudio y más",
    features: [
      "Crear y administrar cuadernos",
      "Crear, editar y eliminar notas en cada cuaderno",
      "Registro de usuarios",
      "Inicio de sesión y manejo seguro de sesiones",
      "Recuperación de contraseña mediante correo electrónico",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "https://mindraft.nicolascueca.dev",
    githubUrl: "https://github.com/PRNicolasCC/mindraft"
  },
  {
    id: 2,
    name: "Página Web Oficial de Cootranstibacuy",
    image: "projects/cootranstibacuy.png",
    category: "Sitio web",
    status: "Completado",
    description: "Diseño y desarrollo del sitio web oficial de Cootranstibacuy, una empresa de transporte terrestre de pasajeros. El proyecto presenta una interfaz moderna y funcional que facilita el acceso a información clave como rutas, horarios y servicios. La experiencia del usuario fue priorizada para ofrecer una plataforma clara, accesible y adaptada a diferentes dispositivos",
    features: [
    "Animaciones al realizar el primer scroll en cada seccíon",
    "Formulario de PQRS funcional",
    "Información de contacto y redes sociales",
    "Datos de sercicios, rutas, precios, horarios y agencias",
    ],
    technologies: ["Tailwind", "TypeScript", "Astro"],
    liveUrl: "https://cootranstibacuy.vercel.app/",
    githubUrl: ""
  },
  {
    id: 3,
    name: "Consulta de información administrativa y financiera para asociados",
    image: "projects/asociados.png",
    category: "Aplicación web",
    status: "En desarrollo",
    description: "En este proyecto colaboré en la creación de una plataforma interna diseñada para centralizar y agilizar el acceso de los asociados a información clave, incluyendo reportes de combustible, producciones, peajes, extractos financieros, estado de cartera, fondos de reposición, certificaciones de ingreso y comunicados institucionales",
    features: [
    "Reportes de combustible para vehículos de la cooperativa y vehículos particulares",
    "Consulta de producidos y peajes de vehículos del servicio intermunicipal",
    "Generación de extractos financieros",
    "Generación de certificaciones de ingreso",
    "Extracto de estado de cartera",
    "Información de fondos de reposición",
    "Publicaciones de comunicados de interés general",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "FirebirdSQL", "jQuery", "Bootstrap"],
    liveUrl: "https://cootransfusa.com/gas_station/",
    githubUrl: ""
  },
  {
    id: 4,
    name: "Gestión de monitoreo de vehículos del servicio intermunicipal",
    image: "projects/monitoreo.png",
    category: "Aplicación web",
    status: "Completado",
    description: "Esta herramienta fue desarrollada para centralizar el registro y la consulta de los reportes diarios de los viajes realizados por los vehículos del servicio intermunicipal. Su implementación permite a los colaboradores gestionar la información operativa de forma más ágil y organizada, mejorando la trazabilidad de cada recorrido y facilitando la toma de decisiones basadas en datos precisos y actualizados",
    features: [
    "Registro de reportes de monitoreo de los servicios de cada vehículo",
    "Consulta y edición de reportes registrados",
    "Categorización de reportes por vehículo y fecha",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "https://cootransfusa.com/monitoreo/",
    githubUrl: ""
  },
  {
    id: 5,
    name: "Actualización de datos de pasajeros",
    image: "projects/pasajeros.png",
    category: "Aplicación web",
    status: "Completado",
    description: "Para mejorar la calidad de la información y asegurar la correcta emisión de facturas electrónicas, se desarrolló un sistema que permite a los pasajeros consultar y actualizar sus datos personales de forma sencilla y segura.",
    features: [
    "Consultar sus datos registrados por pasajero",
    "Actualizar información personal y de contacto",
    "Mantener su perfil siempre al día para evitar inconsistencias en la facturación electrónica",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "Bootstrap"],
    liveUrl: "https://cootransfusa.com/registrofac/index.php?action=formulario",
    githubUrl: ""
  },
  {
    id: 6,
    name: "Sorteos para horarios de salida del transporte intermunicipal",
    image: "projects/sorteos.png",
    category: "Aplicación web",
    status: "Completado",
    description: "Con el propósito de optimizar la organización diaria de la operación intermunicipal de Cootransfusa, se desarrolló una plataforma que permite a los conductores registrarse desde el terminal donde iniciarán su ruta. Cada noche, el sistema ejecuta un sorteo automático que define el orden y la hora de presentación para el primer trayecto del día siguiente",
    features: [
    "Registro centralizado de conductores y vehículos por terminal",
    "Sorteo nocturno automático para definir turnos",
    "Consulta del orden de salida y horarios asignados",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "https://cootransfusa.com/enturne_inter/",
    githubUrl: ""
  },
  {
    id: 7,
    name: "Consultas de información para clientes preferenciales",
    image: "projects/preferencial.png",
    category: "Aplicación web",
    status: "Completado",
    description: "Cootransfusa ofrece un programa de beneficios para pasajeros frecuentes que incluye descuentos en pasajes, acceso prioritario en taquillas y el uso de una tarjeta preferencial para adquirir tiquetes con ventajas adicionales. Con el objetivo de modernizar este proceso y mejorar la experiencia del usuario, se desarrolló una plataforma que digitaliza por completo este sistema de beneficios. La solución integra una tarjeta virtual, permite a los pasajeros visualizar su saldo en tiempo real y consultar el historial de facturas de viajes dentro de un periodo determinado.",
    features: [
    "Consulta del historial de facturas de viajes en un periodo determinado",
    "Una tarjeta virtual, que representa digitalmente la tarjeta preferencial",
    "Visualización del saldo actual del usuario",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "https://cootransfusa.com/pasajeros/",
    githubUrl: ""
  },
  ];