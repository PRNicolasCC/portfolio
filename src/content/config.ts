// src/data/collections.ts
import { z } from 'zod';
import { projectSchema, languageSchema, experienceSchema } from './schemas';

// Define los tipos de datos a partir de los schemas
export type Project = z.infer<typeof projectSchema>;
export type Language = z.infer<typeof languageSchema>;
export type Experience = z.infer<typeof experienceSchema>;

// Ejemplo de datos para tus colecciones
export const projects: Project[] = [
  {
    title: 'pasajeros',
    author: 'Nicolas Cueca',
    img: 'pasajeros.PNG',
    description: 'Sistema de gestión de pasajeros',
  },
  {
    title: 'nomina',
    author: 'Nicolas Cueca',
    img: 'nomina.PNG',
    description: 'Sistema de cálculo de comisiones de vehículos y conductores',
  },
  {
    title: 'mantenimiento',
    author: 'Nicolas Cueca',
    img: 'mantenimiento.PNG',
    description: 'Sistema de inspecciones preoperacionales',
  },
  {
    title: 'enturne',
    author: 'Nicolas Cueca',
    img: 'enturne.PNG',
    description: 'Sistema de sorteos para horarios del transporte intermunicipal',
  },
  {
    title: 'empleados',
    author: 'Nicolas Cueca',
    img: 'empleados.PNG',
    description: 'Aplicación web para empleados de Cootransfusa',
  },
];

export const languages: Language[] = [
  {
    id: 1,
    name: "Frontend",
    icon: "🎨",
    description: "Tecnologías para crear interfaces de usuario modernas y responsivas",
    technologies: [
      { name: "HTML", level: "Avanzado", icon: "html", classes: "text-orange-500" },
      { name: "CSS", level: "Avanzado", icon: "css", classes: "text-blue-500" },
      { name: "JavaScript", level: "Avanzado", icon: "javascript", classes: "text-yellow-400" },
      { name: "jQuery", level: "Intermedio", icon: "jquery", classes: "text-blue-600" },
      { name: "React JS", level: "Avanzado", icon: "react", classes: "text-blue-400" },
      { name: "Bootstrap", level: "Avanzado", icon: "bootstrap", classes: "text-purple-800" },
      { name: "Tailwind CSS", level: "Avanzado", icon: "tailwind", classes: "text-blue-400" }
    ]
  },
  {
    id: 2,
    name: "Backend",
    icon: "⚙️",
    description: "Herramientas para desarrollo del lado del servidor y APIs",
    technologies: [
      { name: "Node.js", level: "Avanzado", icon: "node", classes: "text-green-800" },
      { name: "PHP", level: "Avanzado", icon: "php", classes: "text-blue-800" },
      { name: "Laravel", level: "Intermedio", icon: "laravel", classes: "text-red-600" },
      { name: "Python", level: "Avanzado", icon: "python", classes: "text-blue-400" },
      { name: "FastAPI", level: "Intermedio", icon: "fastapi", classes: "text-green-300" },
      { name: "Java", level: "Intermedio", icon: "java", classes: "text-red-600" }
    ]
  },
  {
    id: 3,
    name: "Base de Datos & Sistemas",
    icon: "💾",
    description: "Gestión de datos y administración de sistemas",
    technologies: [
      { name: "MySQL", level: "Avanzado", icon: "mysql", classes: "text-blue-800" },
      { name: "Linux", level: "Intermedio", icon: "linux", classes: "text-black" }
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
      company: "Cootransfusa",
      position: "Desarrollador Full-Stack y Auxiliar de Sistemas",
      duration: "Febrero 2023 - Presente",
      location: "Fusagasugá, Colombia",
      description: "Desarrollando y manteniendo aplicaciones web, administrando sistemas y gestionando servidores",
      responsibilities: [
        "Desarrollo, despliegue y mantenimiento de aplicaciones web utilizando tecnologías como Bootstrasp, JavaScript, React, PHP y MySQL",
        "Administración y monitoreo de sistemas informáticos para garantizar su disponibilidad y seguridad",
        "Configuración y administración de servidores con sistemas operativos basados en Linux",
        "Análisis de requerimientos y planteamiento de soluciones al sector mediante el uso de código",
        "Desarrollo Backend y de APIs para la correcta comunicación de las aplicaciones y la información de los servidores"
      ],
  },
  {
    id: 2,
    company: "Jacktek",
    position: "Aprendiz de análisis y desarrollo de sistemas de información",
    duration: "Octubre 2021 - Abril 2022",
    location: "Cajicá, Colombia",
    description: "Creación y mantenimiento de páginas web y aplicaciones corporativas",
    responsibilities: [
      "Análisis y desarrollo de software con participación en la creación y mantenimiento de funcionalidades básicas",
      "Dominio de Frontend y Backend, trabajando en entornos de desarrollo usando HTML, CSS, Bootstrap, JavaScript, PHP y MySQL",
      "Pruebas en los aplicativos para garantizar su correcto funcionamiento",
      "Adaptacion frontend de las aplicaciones a partir de diseños o plantillas previamente realizadas",
      "Soporte técnico a usuarios para resolución de incidencias y asistencia en el uso de sistemas"
    ],
  }
];