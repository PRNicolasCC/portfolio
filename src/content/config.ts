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
    icon: "🎨",
    description: "Tecnologías para crear interfaces de usuario modernas y responsivas",
    technologies: [
      { name: "HTML", level: "Avanzado", icon: "html", classes: "text-orange-500" },
      { name: "CSS", level: "Avanzado", icon: "css", classes: "text-blue-500" },
      { name: "Bootstrap", level: "Avanzado", icon: "bootstrap", classes: "text-purple-800" },
      { name: "Tailwind", level: "Avanzado", icon: "tailwind", classes: "text-blue-400" },
      { name: "JavaScript", level: "Avanzado", icon: "javascript", classes: "text-yellow-400" },
      { name: "TypeScript", level: "Avanzado", icon: "typescript", classes: "text-blue-500" },
      { name: "jQuery", level: "Intermedio", icon: "jquery", classes: "text-blue-600" },
      { name: "React", level: "Avanzado", icon: "react", classes: "text-blue-400" },
      { name: "Astro", level: "Avanzado", icon: "astro", classes: "text-orange-600" },
      { name: "Wordpress", level: "Avanzado", icon: "wordpress", classes: "text-blue-500" },
    ]
  },
  {
    id: 2,
    name: "Backend",
    icon: "⚙️",
    description: "Herramientas para desarrollo del lado del servidor y APIs",
    technologies: [
      /* { name: "Node.js", level: "Avanzado", icon: "node", classes: "text-green-800" }, */
      { name: "PHP", level: "Avanzado", icon: "php", classes: "text-blue-700" },
      { name: "Laravel", level: "Intermedio", icon: "laravel", classes: "text-red-600" },
      { name: "Python", level: "Avanzado", icon: "python", classes: "text-blue-400" },
      { name: "FastAPI", level: "Intermedio", icon: "fastapi", classes: "text-green-300" },
      { name: "Django", level: "Principiante", icon: "django", classes: "text-green-400" },
      { name: "Java", level: "Intermedio", icon: "java", classes: "text-red-600" }
    ]
  },
  {
    id: 3,
    name: "Bases de Datos & Sistemas",
    icon: "💾",
    description: "Gestión de datos y administración de sistemas",
    technologies: [
      { name: "MySQL", level: "Avanzado", icon: "mysql", classes: "text-blue-800" },
      { name: "PostgreSQL", level: "Intermedio", icon: "postgresql", classes: "text-blue-800" },
      { name: "Ubuntu", level: "Intermedio", icon: "ubuntu", classes: "text-orange-500" },
      { name: "RHEL", level: "Intermedio", icon: "redhat", classes: "text-red-700" },
      /* { name: "Linux", level: "Intermedio", icon: "linux", classes: "text-black" } */
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
      company: "Cootransfusa",
      position: "Desarrollador Full-Stack y Auxiliar de Sistemas",
      duration: "Febrero 2023 - Agosto 2025",
      location: "Fusagasugá, Colombia",
      description: "Desarrollando y manteniendo aplicaciones web, administrando sistemas y gestionando servidores",
      responsibilities: [
        "Desarrollo, despliegue y mantenimiento de aplicaciones web utilizando tecnologías como Bootstrasp, JavaScript, jQuery, React, PHP y MySQL",
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
      "Dominio de Frontend y Backend, trabajando en entornos de desarrollo usando Bootstrap, JavaScript, jQuery, PHP y MySQL",
      "Pruebas en los aplicativos para garantizar su correcto funcionamiento",
      "Adaptacion frontend de las aplicaciones a partir de diseños o plantillas previamente realizadas",
      "Soporte técnico a usuarios para resolución de incidencias y asistencia en el uso de sistemas"
    ],
  }
];

export const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      category: "Aplicación Web",
      duration: "3 meses",
      status: "Completado",
      description: "Plataforma de comercio electrónico completa con sistema de pagos integrado, gestión de inventario y panel administrativo",
      features: [
        "Sistema de autenticación y autorización",
        "Carrito de compras con persistencia",
        "Integración con pasarelas de pago (PayU, Mercado Pago)",
        "Panel de administración para gestión de productos",
        "Sistema de notificaciones por email",
        "Diseño responsive y optimización móvil"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Tailwind CSS"],
      liveUrl: "https://ejemplo-ecommerce.com",
      githubUrl: "https://github.com/usuario/ecommerce-platform"
    },
    {
      id: 2,
      name: "Task Management App",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      category: "Aplicación Móvil/Web",
      duration: "2 meses",
      status: "En desarrollo",
      description: "Aplicación de gestión de tareas colaborativa con funcionalidades de tiempo real y sincronización entre dispositivos",
      features: [
        "Creación y asignación de tareas en equipo",
        "Chat en tiempo real con Socket.io",
        "Sincronización automática entre dispositivos",
        "Notificaciones push personalizables",
        "Reportes y analytics de productividad",
        "Integración con Google Calendar"
      ],
      technologies: ["React Native", "Express.js", "PostgreSQL", "Socket.io", "Redux", "Firebase"],
      liveUrl: null,
      githubUrl: "https://github.com/usuario/task-manager"
    },
    {
      id: 3,
      name: "Portfolio Personal",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=500&fit=crop",
      category: "Sitio Web",
      duration: "1 mes",
      status: "Completado",
      description: "Sitio web personal con diseño moderno, optimizado para SEO y rendimiento, incluyendo blog y formulario de contacto",
      features: [
        "Diseño responsive y animaciones suaves",
        "Blog integrado con CMS headless",
        "Formulario de contacto funcional",
        "Optimización SEO y meta tags dinámicos",
        "Modo oscuro/claro",
        "Integración con Google Analytics"
      ],
      technologies: ["Next.js", "TypeScript", "Sanity CMS", "Framer Motion", "Vercel"],
      liveUrl: "https://mi-portfolio.com",
      githubUrl: "https://github.com/usuario/portfolio"
    },
    {
      id: 4,
      name: "Weather Dashboard",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      category: "Aplicación Web",
      duration: "2 semanas",
      status: "Completado",
      description: "Dashboard meteorológico interactivo con mapas, gráficos y predicciones extendidas para múltiples ciudades",
      features: [
        "Búsqueda de ciudades con autocompletado",
        "Mapas interactivos con capas meteorológicas",
        "Gráficos de tendencias de temperatura y precipitación",
        "Predicción extendida a 7 días",
        "Geolocalización automática",
        "Favoritos y historial de búsquedas"
      ],
      technologies: ["Vue.js", "Chart.js", "Leaflet", "OpenWeather API", "Vuetify"],
      liveUrl: "https://weather-dashboard-demo.com",
      githubUrl: "https://github.com/usuario/weather-dashboard"
    }
  ];