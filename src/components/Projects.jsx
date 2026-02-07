import { projects } from "../content/config";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Icon from './icons/Icon';

function Projects() {
  useEffect(() => {AOS.init()}, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completado":
        return "bg-green-100 text-green-800";
      case "En desarrollo":
        return "bg-blue-100 text-blue-800";
      case "En pausa":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-orange-300";
    }
  };

  return (
    <>
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        .group:hover .animate-shine {
          animation: shine 0.75s ease-in-out;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-4 py-8 z-1" id="projects">

			<div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4 mb-12 text-center" data-aos="fade-down">
				<svg className="w-8 h-8 lg:w-14 lg:h-14 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
					<path fillRule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clipRule="evenodd"/>
				</svg>
          <h2 className="text-4xl lg:text-6xl font-bold">Proyectos</h2>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <div 
              key={project.id} 
              data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-500 relative group"
            >
              {/* Efecto de brillo */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 animate-shine pointer-events-none z-10"></div>
              
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-orange-500">
                      {project.name}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-lg italic">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-orange-400 mb-2 text-base">Características principales:</h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-base">
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
                  <h5 className="font-semibold text-orange-400 mb-2 text-sm">Tecnologías:</h5>
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
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center gap-1 bg-clementine-600 text-clementine-100 px-3 py-2 rounded text-xs font-medium hover:bg-clementine-700 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Ver detalles
                  </Link>

                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded text-xs font-medium hover:bg-orange-600 transition-colors"
                    >
                      <Icon nombre='website' classes='w-6 h-6 text-blue-600' /> Ver Demo
                    </a>
                  )}
                   
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-gray-700 text-white px-3 py-2 rounded text-xs font-medium hover:bg-gray-900 transition-colors"
                    >
                      <Icon nombre='code' classes='w-6 h-6 text-yellow-300' /> Código
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="my-8 bg-gray-800 p-4 lg:p-8 rounded-lg border-2 border-clementine-600 transition-all duration-300 hover:shadow-sm hover:shadow-clementine-500 w-full lg:w-auto">
            <p className="leading-relaxed text-base lg:text-lg text-clementine-200 text-center">
                Para conocer más información de estos y otros proyectos, puedes ir a la sección de proyectos de mi Linkedin en el siguiente enlace:
                <br /><br />
                <a target="_blank" href="https://www.linkedin.com/in/nicolas-cueca-carpeta-41753b1b0/details/projects/">
                  <button className="bg-clementine-600 p-4 rounded-lg cursor-pointer text-clementine-100 hover:bg-clementine-700 transition-colors">Proyectos en Linkedin</button>
                </a>
            </p>
        </div>

      </div>
    </>
  );
}

export default Projects;