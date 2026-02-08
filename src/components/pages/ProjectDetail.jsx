import { useParams } from 'react-router-dom';
import { projects } from '../../content/config';
import Icon from '../icons/Icon';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Proyecto no encontrado</h2>
          <p className="text-gray-300">El proyecto que buscas no existe.</p>
        </div>
      </div>
    );
  }

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <button 
          onClick={() => window.history.back()}
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver a proyectos
        </button>
      </div>

      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500">
        <div className="p-6 lg:p-8">
          <div className="flex items-start justify-between mb-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-orange-500">
              {project.name}
            </h1>
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Galería del proyecto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.gallery && project.gallery.length > 0 ? (
                project.gallery.map((img, index) => (
                  <div 
                    key={index} 
                    className={`relative overflow-hidden rounded-lg cursor-pointer group ${
                      index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
                    }`}
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}projects/${img}`}
                      alt={`${project.name} - Imagen ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  </div>
                ))
              ) : (
                <div className="col-span-full bg-gray-900 rounded-lg p-12 text-center">
                  <svg className="w-20 h-20 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-400">Galería no disponible</p>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Descripción</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Categoría</h2>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded text-sm font-medium">
              {project.category}
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Características</h2>
            <ul className="grid gap-3 lg:grid-cols-2">
              {project.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-start gap-3 bg-gray-700 p-4 rounded-lg"
                >
                  <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-orange-400 mb-4">Tecnologías utilizadas</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="bg-orange-100 text-orange-800 px-4 py-2 rounded text-sm font-medium hover:bg-orange-200 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4 pt-6 border-t border-gray-700">
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
              >
                <Icon nombre='website' classes='w-6 h-6' /> Ver Demo
              </a>
            )}
            
            {project.githubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors"
              >
                <Icon nombre='code' classes='w-6 h-6' /> Código
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
