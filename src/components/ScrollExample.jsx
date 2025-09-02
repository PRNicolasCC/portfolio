import React, { useState, useEffect } from 'react';

const AnimatedNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Punto específico donde se activa la animación
  const SCROLL_THRESHOLD = 100;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > SCROLL_THRESHOLD);
    };

    // Agregar el event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup del event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar con animación */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled 
            ? 'bg-white shadow-lg backdrop-blur-md bg-opacity-95 py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo con animación de escala */}
          <div 
            className={`font-bold transition-all duration-300 ${
              isScrolled 
                ? 'text-2xl text-gray-800 scale-90' 
                : 'text-3xl text-white scale-100'
            }`}
          >
            Mi Logo
          </div>

          {/* Menú de navegación */}
          <ul className="flex space-x-6">
            {['Inicio', 'Servicios', 'Acerca', 'Contacto'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? 'text-gray-700 hover:text-blue-600'
                      : 'text-white hover:text-blue-300'
                  }`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Indicador de scroll */}
          <div className={`text-sm transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}>
            <span className="text-gray-600">Scroll: {Math.round(scrollY)}px</span>
          </div>
        </div>

        {/* Barra de progreso de scroll */}
        <div className="absolute bottom-0 left-0 h-1 bg-blue-600 transition-all duration-100"
             style={{ width: `${Math.min((scrollY / 1000) * 100, 100)}%` }}
        />
      </nav>

      {/* Hero Section */}
      <div className="h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Navbar Animado</h1>
          <p className="text-xl mb-8">Desplázate hacia abajo para ver la animación</p>
          <div className="animate-bounce">
            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Contenido de ejemplo */}
      {[1, 2, 3, 4, 5].map((section) => (
        <div key={section} className="py-20 px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Sección {section}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Contenido de ejemplo
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">
                  Más contenido
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default AnimatedNavbar;