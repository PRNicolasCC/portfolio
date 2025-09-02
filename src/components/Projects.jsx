import { projects, languages } from "../content/config";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Projects () {
	useEffect(() => {AOS.init()}, []);

	const projects = [
		{
		  id: 1,
		  name: "E-commerce Platform",
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
	
	  const getStatusColor = (status) => {
		switch (status) {
		  case "Completado":
			return "bg-green-100 text-green-800";
		  case "En desarrollo":
			return "bg-blue-100 text-blue-800";
		  case "En pausa":
			return "bg-yellow-100 text-yellow-800";
		  default:
			return "bg-gray-100 text-celementine-300";
		}
	  };
	
	  return (
		<div className="max-w-6xl mx-auto px-4 py-8 z-1" id="projects">

			<div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4 mb-12 text-center" data-aos="fade-down">
				<svg className="w-8 h-8 lg:w-14 lg:h-14 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
					<path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
				</svg>
				<h2 className="text-4xl lg:text-6xl font-bold"> 
					Proyectos
				</h2>
			</div>
		  
		  <div className="grid gap-8 lg:grid-cols-2 space-y-8 lg:space-x-2 md:pl-14">
			{projects.map((project) => (
			  <div 
				key={project.id} 
				data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}
				className="bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl max-w-lg object-cover hover:scale-105 transition-transform duration-500 animate-none"
			  >
				<div className="mb-4">
				  <div className="flex items-start justify-between mb-2">
					<h3 className="text-xl font-bold text-clementine-500">
					  {project.name}
					</h3>
					<span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
					  {project.status}
					</span>
				  </div>
				  
				  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
					<span className="font-medium">📁 {project.category}</span>
					<span>⏱️ {project.duration}</span>
				  </div>
				</div>
	
				<p className="text-clementine-200 mb-4 text-lg italic">
				  {project.description}
				</p>
	
				<div className="mb-4">
				  <h5 className="font-semibold text-clementine-300 mb-2 text-base">Características principales:</h5>
				  <ul className="list-disc list-inside space-y-1 text-clementine-200">
					{project.features.slice(0, 3).map((feature, index) => (
					  <li key={index} className=" text-base">
						{feature}
					  </li>
					))}
					{project.features.length > 3 && (
					  <li className="text-xs text-gray-500 italic">
						+{project.features.length - 3} características más...
					  </li>
					)}
				  </ul>
				</div>
	
				<div className="mb-4">
				  <h5 className="font-semibold text-clementine-300 mb-2 text-sm">Tecnologías:</h5>
				  <div className="flex flex-wrap gap-1">
					{project.technologies.map((tech, index) => (
					  <span 
						key={index}
						className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium"
					  >
						{tech}
					  </span>
					))}
				  </div>
				</div>
	
				<div className="flex gap-3 pt-2">
				  {project.liveUrl && (
					<a 
					  href={project.liveUrl}
					  target="_blank"
					  rel="noopener noreferrer"
					  className="inline-flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded text-xs font-medium hover:bg-orange-600 transition-colors"
					>
					  🌐 Ver Demo
					</a>
				  )}
				  
				  {project.githubUrl && (
					<a 
					  href={project.githubUrl}
					  target="_blank"
					  rel="noopener noreferrer"
					  className="inline-flex items-center gap-1 bg-clementine-300 text-white px-3 py-2 rounded text-xs font-medium hover:bg-gray-900 transition-colors"
					>
					  📂 Código
					</a>
				  )}
				</div>
			  </div>
			))}
		  </div>
		</div>
	  );
}
export default Projects;