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
      { name: "SQLite", icon: "sqlite", classes: "text-blue-600" },
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
    name: "MiniERP",
    image: "minierp.png",
    category: "Sistema ERP",
    status: "En desarrollo",
    description: "Sistema integral de planificación de recursos empresariales diseñado para gestionar procesos administrativos, financieros y operativos de manera centralizada. Esta solución permite a las organizaciones controlar y optimizar sus recursos mediante módulos especializados que facilitan la toma de decisiones estratégicas basadas en datos en tiempo real",
    features: [
      "Gestión de inventarios y control de stock",
      "Registro y seguimiento de proveedores",
      "Gestión de facturación y cuentas por cobrar",
      "Control de ventas y reportes de rendimiento",
      "Panel de control con indicadores clave de desempeño",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
    gallery: [
      "minierp/1-login.png",
      "minierp/2-dash.png",
      "minierp/3-dash2.png",
      "minierp/4-dash3.png",
      "minierp/5-dash4.png"
    ]
  },
  {
    id: 2,
    name: "Mindraft",
    image: "mindraft.png",
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
    githubUrl: "https://github.com/PRNicolasCC/mindraft",
    gallery: [
      "mindraft/1-login.png",
      "mindraft/2-dashboard.png",
      "mindraft/3-nuevo-cuaderno.png",
      "mindraft/4-editar-cuadernos.png",
      "mindraft/5-notas.png",
      "mindraft/6-nueva-nota.png",
      "mindraft/7-editar-nota.png"
    ]
  },
  {
    id: 3,
    name: "Consulta de información administrativa y financiera para asociados",
    image: "asociados.png",
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
    githubUrl: "",
    gallery: [
      "asociados/1-login.png",
      "asociados/2-welcome.png",
      "asociados/3-tanqueos.png",
      "asociados/4-producidos.png",
      "asociados/5-posiciones.png",
      "asociados/6-peajes.png",
      "asociados/7-extractos.png",
      "asociados/8-extractos2.png",
      "asociados/9-extractos3.png",
      "asociados/10-extractos4.png",
      "asociados/11-cartera.png",
      "asociados/12-fondo1.png",
      "asociados/13-fondo7.png",
      "asociados/14-certificaciones.png",
      "asociados/15-certificaciones2.png",
      "asociados/16-certificaciones3.png",
      "asociados/17-cambiar-password.png",
      "asociados/18-comunicados.png",
    ]
  },
  {
    id: 4,
    name: "Gestión de monitoreo de vehículos del servicio intermunicipal",
    image: "monitoreo.png",
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
    githubUrl: "",
    gallery: [
      "monitoreo/1-login.png",
      "monitoreo/2-welcome.png",
      "monitoreo/3-interno.png",
      "monitoreo/4-registrar.png",
      "monitoreo/5-historial.png",
      "monitoreo/6-registros.png",
      "monitoreo/7-modificar.png"
    ]
  },
  {
    id: 5,
    name: "Actualización de datos de pasajeros",
    image: "pasajeros.png",
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
    githubUrl: "",
    gallery: [
      "pasajeros/1-qr.png",
      "pasajeros/2-documento.png",
      "pasajeros/3-datos.png",
      "pasajeros/4-datos2.png"
    ]
  },
  {
    id: 6,
    name: "Sorteos para horarios de salida del transporte intermunicipal",
    image: "sorteos.png",
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
    githubUrl: "",
    gallery: [
      "sorteos/1-login.jpg",
      "sorteos/2-welcome.jpg",
      "sorteos/3-vehiculos.jpg",
      "sorteos/4-terminales.jpg",
      "sorteos/5-consulta.jpg",
      "sorteos/6-registros.jpg",
      "sorteos/7-registros2.jpg",
      "sorteos/8-registros3.jpg",
      "sorteos/9-registros4.jpg",
      "sorteos/10-registros5.jpg",
      "sorteos/11-registros6.jpg",
      "sorteos/12-registros7.jpg",
      "sorteos/13-registros8.jpg",
      "sorteos/14-registros9.jpg",
      "sorteos/15-registros10.jpg",
      "sorteos/16-registros11.jpg"
    ]
  },
  {
    id: 7,
    name: "Consulta de certificados y extractos de nomina para empleados",
    image: "empleados.jpg",
    category: "Aplicación web",
    status: "Completado",
    description: "Plataforma diseñada para facilitar a los empleados el acceso a sus certificados laborales, extractos de nómina y documentos de interés. El sistema permite generar documentos oficiales de manera autónoma, optimizando los procesos administrativos y reduciendo la carga de trabajo del departamento de recursos humanos",
    features: [
      "Consulta de extractos de nómina por periodos",
      "Generación de certificados laborales automáticos",
      "Descarga de constancias de trabajo",
      "Acceso a historial de pagos",
      "Visualización de deducciones y prestaciones",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
    gallery: [
      "empleados/1-login.jpg",
      "empleados/2-welcome.jpg",
      "empleados/3-extractos.jpg",
      "empleados/4-nomina.jpg",
      "empleados/5-nomina2.jpg",
      "empleados/6-certificado.jpg",
      "empleados/7-certificado2.jpg"
    ]
  },
  {
    id: 8,
    name: "Cálculo de comisiones de vehículos y conductores",
    image: "comisiones.png",
    category: "Aplicación web",
    status: "Completado",
    description: "Sistema de gestión de comisiones que automatiza el cálculo y registro de las comisiones tanto para vehículos como para conductores. Esta herramienta permite procesar grandes volúmenes de información de ventas, aplicar tasas de comisión variables y generar reportes detallados para auditoría y control financiero",
    features: [
      "Registro de ventas y producciones de vehículos",
      "Configuración de tasas de comisión personalizables",
      "Cálculo automático de comisiones por periodos",
      "Generación de reportes de comisiones detallados",
      "Historial de pagos y saldos pendientes",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
    gallery: [
      "comisiones/1-login.png",
      "comisiones/2-conductor.png",
      "comisiones/3-comision.png",
      "comisiones/4-comision2.png",
      "comisiones/5-vehiculo.png",
      "comisiones/6-comision3.png"
    ]
  },
  {
    id: 9,
    name: "Consultas de información para clientes preferenciales",
    image: "preferencial.png",
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
    githubUrl: "",
    gallery: [
      "preferencial/1-login.png",
      "preferencial/2-tarjeta.png",
      "preferencial/3-tarjeta2.png",
      "preferencial/4-consulta.png",
      "preferencial/5-tabla.png"
    ]
  },
  {
    id: 10,
    name: "Inspecciones preoperacionales para vehículos de transporte público",
    image: "inspeccion.jpg",
    category: "Aplicación web",
    status: "En desarrollo",
    description: "Sistema digital para la gestión de inspecciones preoperacionales que deben realizar los vehículos de transporte público antes de iniciar cada viaje. La plataforma permite a los conductores completar listas de verificación estandarizadas, documentar el estado del vehículo y reportar anomalías mecánicas o de seguridad",
    features: [
      "Formularios de inspección digitalizados",
      "Registro fotográfico del estado del vehículo",
      "Reporte de anomalías y requerimientos de mantenimiento",
      "Historial de inspecciones por vehículo",
      "Notificaciones de mantenimiento preventivo",
    ],
    technologies: ["PHP", "JavaScript", "MySQL", "jQuery", "Bootstrap"],
    liveUrl: "",
    githubUrl: "",
    gallery: [
      "inspeccion/1-login.jpg",
      "inspeccion/2-options.jpg",
      "inspeccion/3-seleccionar.jpg",
      "inspeccion/4-form.jpg",
      "inspeccion/5-form2.jpg",
      "inspeccion/6-form3.jpg",
      "inspeccion/7-form4.jpg",
      "inspeccion/8-form5.jpg",
      "inspeccion/9-form6.jpg",
      "inspeccion/10-form7.jpg",
      "inspeccion/11-success.jpg",
      "inspeccion/12-registros.jpg",
      "inspeccion/13-detalle.jpg",
      "inspeccion/14-detalle2.jpg",
      "inspeccion/15-detalle3.jpg",
      "inspeccion/16-detalle4.jpg",
      "inspeccion/17-detalle5.jpg"
    ]
  },
];