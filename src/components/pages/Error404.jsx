import React from 'react';

export default function Error404() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full">
        {/* Header con ícono */}
        <div className="flex items-center justify-center text-orange-500 text-center space-x-2 lg:space-x-4 mb-12">
          <svg 
            className="w-8 h-8 lg:w-14 lg:h-14 mt-2" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>

          <h1 className="lg:text-6xl font-bold">
            Error 404
          </h1>
        </div>

        {/* Tarjeta principal */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 lg:p-10 hover:shadow-xl transition-all duration-500 text-center">
          <div className="mb-6">
            <h2 className="lg:text-4xl font-bold text-orange-500 mb-4">
              Página no encontrada
            </h2>
            <p className="text-orange-200 text-lg mb-6 italic">
              Lo sentimos, la página que estás buscando no existe o ha sido movida.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold text-orange-400 mb-3 text-lg">
              Posibles razones:
            </h3>
            <ul className="list-disc list-inside space-y-3 text-orange-200">
              <li className="text-base">
                La URL que ingresaste es incorrecta o tiene un error tipográfico
              </li>
              <li className="text-base">
                El enlace que seguiste está desactualizado o roto
              </li>
              <li className="text-base">
                La página fue removida o reubicada en otra sección del sitio
              </li>
              <li className="text-base">
                No tienes los permisos necesarios para acceder a este recurso
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center sm:flex-row gap-4 mt-8">
            <a
              href="/"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
            >
              Volver al inicio
            </a>
            <button
              onClick={() => window.history.back()}
              className="bg-gray-700 hover:bg-gray-600 text-orange-200 font-semibold py-3 px-6 rounded-lg transition-colors duration-300 cursor-pointer"
            >
              ← Página anterior
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}