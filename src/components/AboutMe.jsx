/* import { motion } from "motion/react";
import fadeIn from "../js/variants"; */

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

            {/* <motion.div
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="mx-20 z-1" 
            id="aboutme"
        > */}

        <div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-person-fill w-8 h-8 lg:w-14 lg:h-14 mt-2" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
            <h2 className="text-pretty text-4xl lg:text-6xl font-bold">Sobre mí</h2>
        </div>

            <div className="my-8 bg-gray-800 p-4 lg:p-8 rounded-lg border-2 border-clementine-600 transition-all duration-300 hover:shadow-sm hover:shadow-clementine-500 w-full lg:w-auto">
                <p className="leading-relaxed text-base lg:text-lg text-clementine-200">
                    {/* Desarrollador de software con experiencia en el desarrollo e implementación de aplicaciones web aplicando soluciones innovadoras a problemas del mundo real. */} {/* Me encanta crear aplicaciones óptimas e innovadoras que satisfacen las necesidades de los usuarios. */}
                    {/* Actualmente me desempeño como desarrollador web y auxiliar de soporte técnico en una empresa ubicada en mi ciudad natal Fusagasugá, Colombia. */}
                    {/* Me encanta aprender nuevas tecnologías para mejorar mis habilidades y me gusta compartir mi conocimiento con otros mediante el trabajo en equipo. */}
                    {/* Si tienes alguna consulta, no dudes en <a href="#contact" className="text-clementine-500 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-rose-600 hover:via-red-400 hover:to-orange-500 transition-color duration-300">contactarme</a>. */}
                    {/* Si tienes alguna consulta, no dudes en <a href="#contact" className="text-clementine-500 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 opacity-100 group-hover:-translate-x-8">contactarme</a>. */}

                    Experiencia de más de 2 años en el análisis, desarrollo e implementación de aplicaciones web corporativas. He colaborado en diferentes proyectos dentro de las organizaciones en las que he participado, utilizando diversas herramientas de programación para funcionalidades de front-end, back-end, bases de datos, Dev-Ops y Testing. Constantemente me encuentro aprendiendo y explorando nuevas tecnologías con el fin de incorporar las mejores herramientas y técnicas de la industria para los proyectos en los que trabajo.
                </p>
            </div>
        {/* </motion.div> */}

        </div>
    )
}

export default AboutMe;