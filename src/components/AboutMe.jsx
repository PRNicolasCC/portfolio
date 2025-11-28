import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function AboutMe () {
    useEffect(() => {AOS.init()}, []);
    return (
        <div
            className="mt-20 lg:mt-10 mx-6 lg:mx-20 z-1 w-full lg:w-auto" 
            id="aboutme"
            data-aos="fade-right"
        >

        <div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill w-8 h-8 lg:w-14 lg:h-14 mt-2" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <h2 className="text-pretty text-4xl lg:text-6xl font-bold">Sobre mí</h2>
        </div>

            <div className="my-8 bg-gray-800 p-4 lg:p-8 rounded-lg border-2 border-clementine-600 transition-all duration-300 hover:shadow-sm hover:shadow-clementine-500 w-full lg:w-auto">
                <p className="leading-relaxed text-base lg:text-lg text-clementine-200">
                    {/* Experiencia de más de 2 años en el análisis, desarrollo e implementación de aplicaciones web corporativas. He colaborado en diferentes proyectos dentro de las organizaciones en las que he participado, utilizando diversas herramientas de programación para funcionalidades de front-end, back-end, bases de datos, Dev-Ops y Testing. Constantemente me encuentro aprendiendo y explorando nuevas tecnologías con el fin de incorporar las mejores herramientas y técnicas de la industria para los proyectos en los que trabajo. */}
                    Hola, soy Nicolas Cueca, un Desarrollador de Software apasionado por crear experiencias digitales rápidas, confiables y con propósito. Durante los últimos tres años he trabajado en empresas tecnológicas y de transporte, apoyando su transformación a través del desarrollo web moderno y soluciones de despliegue.
                    Mi trabajo se caracteriza por la creatividad, la precisión técnica y una mentalidad proactiva. <br />
                    Cada proyecto es una oportunidad para aprender, innovar y construir tecnología que impulse a las personas y a las organizaciones hacia adelante.
                </p>
            </div>

        </div>
    )
}

export default AboutMe;