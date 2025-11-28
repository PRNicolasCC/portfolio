import TypeIt from "typeit-react";

function Intro () {
    return (
    <>
        <div className="flex flex-col lg:flex-row mx-10 lg:mx-auto z-1" id="#">
            <div className="flex-1 flex justify-center lg:justify-start lg:pl-20 xl:pl-0">
                    <div className="relative lg:bottom-8">
                        {/* Efecto de fondo decorativo */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
                        
                        {/* Container principal de la imagen */}
                        <div className="relative w-72 h-72 lg:w-78 lg:h-78">
                            {/* Borde decorativo animado */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 p-1 animate-spin-slow">
                                <div className="w-full h-full rounded-full bg-gray-900"></div>
                            </div>
                            
                            {/* Imagen del programador */}
                            <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl bg-gradient-to-t from-black/20 to-transparent hover:from-blue-300 z-1">
                                <img 
                                    src="/myself.png" 
                                    alt="Nicolas Cueca - Programador Full-Stack" 
                                    className="object-cover hover:scale-105 transition-transform duration-500 z-30 animate-none"
                                />
                                
                                {/* Overlay sutil */}
                                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent hover:from-blue-300 hover:to-blue-500 z-1"></div> */}
                            </div>
                            
                            {/* Elementos decorativos flotantes */}
                            {/* <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-400 rounded-full opacity-80 animate-bounce"></div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-red-500 rounded-full opacity-60 animate-pulse"></div>
                            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-orange-300 rounded-full opacity-50 animate-ping animate-infinite animate-duration-[2000ms] animate-delay-[2500ms]"></div> */}
                        </div>
                    </div>
                </div>

            <div className="my-6 lg:pl-16">
                <TypeIt
                    as={"span"}
                    className="text-pretty text-3xl text-left text-clementine-100"
                    getBeforeInit={(instance) => {
                        instance
                        .type("Desarrollador de Software Full-Stack")
                        .pause(1500)
                        .delete(null)
                        .type("Creador de páginas y aplicaciones web")
                        .pause(1500)
                        .delete(null)
                        .type("Estudiante de Ingeniería de Software")
                        .pause(1500);

                        return instance;
                    }}
                    options={{
                        speed: 50, // Velocidad de escritura (milisegundos por caracter)
                        deleteSpeed: 10, // Velocidad de borrado
                        loop: true, // Repite el texto indefinidamente
                    }}
            >
                {/* This is a placeholder that will be replaced (default). */}
            </TypeIt>
                <h1 className="text-pretty text-7xl text-left text-clementine-300 opacity-100 mt-2">Hola, soy <span className="text-clementine-600 font-bold text-shadow-lg/30 text-shadow-clementine-500">Nicolas Cueca</span></h1>
            </div>
        </div>

        <div className="flex items-center justify-center w-full mt-14 lg:mt-10">
            <a href="#aboutme" className="flex items-center justify-center rounded-full bg-clementine-600 text-clementine-100 w-18 h-18 animate-bounce animate-infinite animate-duration-[3000ms] hover:bg-clementine-100 hover:text-gray-900 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                </svg>
            </a>
        </div>
    </>
    )
}

export default Intro;
    