import { useState, useRef,  useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
/* import { Transition } from '@headlessui/react'; */

//import ContactButton from './ContactButton';

function Header () {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  /* const [isVisible, setIsVisible] = useState(true); */

  const SCROLL_THRESHOLD = 50;

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  const listaNavbar = [
    { href: '#aboutme', name: 'Sobre mí'}, 
    { href: '#experience', name: 'Experiencia' },
    /* { href: '#projects', name: 'Proyectos'},  */
    { href: '#stack', name: 'Stack' },
    
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Referencias para los elementos
  const menuRef = useRef(null);
  const lineasRef = useRef(null);
  const closeMenuRef = useRef(null);
  const hamburgerNavbarRef = useRef(null);
  const navbarListRef = useRef(null);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuHandler = () => {
    setIsExpanded(false);
    setIsMenuOpen(false);
  };
  

  return (
    <>
    {/* <Transition
        show={!isVisible}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100" */}
        {/* leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0" */
        /* className="mt-4 p-6 bg-gray-100 border rounded-lg" */
        /* as="transition-headless-navbar" */ /* Se coloca 'as' para que el componente funcione de manera correcta sin necesidad de asignar le un ref/useRef */}
    {/* > */}
      <div className="flex justify-end">
        <button 
          data-collapse-toggle="navbar-sticky"
          type="button"
          aria-expanded={isExpanded}
          aria-controls="navbar-hamburger"
          onClick={toggleMenu}
          ref={hamburgerNavbarRef}
          className={`fixed top-0 md:top-4 md:right-20 z-50 rounded-full p-2 cursor-pointer animate-fade-up animate-once
            ${isMenuOpen ? 'bg-transparent' : 'bg-gray-300'}
            ${!isMenuOpen && !isScrolled ? 'inline xl:hidden' : ''}
            ${!isMenuOpen && isScrolled ? 'inline' : ''}`}
          id="hamburger-navbar"
        >
          <div
            /* data-collapse-toggle="navbar-sticky" */
            /* type="button" */
            /* aria-expanded={isExpanded}
            aria-controls="navbar-hamburger"
            onClick={toggleMenu}
            ref={hamburgerNavbarRef} */
            className={`cursor-pointer p-2 w-12 h-12 text-sm text-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:focus:ring-gray-600" ${
              isMenuOpen ? 'bg-transparent' : 'bg-gray-300'
            }`}
          >
            <span className="sr-only">Open main menu</span>
            <svg className={`w-full h-full animate-rotate-y ${isMenuOpen ? 'hidden' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" id="rowsMenu" ref={lineasRef}>
                <path stroke="oklch(21% 0.034 264.665)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            <svg ref={closeMenuRef}
              className={`w-full h-full animate-rotate-x ${!isMenuOpen ? 'hidden' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" id="closeMenu">
              <path stroke="oklch(87.2% 0.01 258.338)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
          </div>
        </button>
      </div>

      <motion.nav 
        className={`fixed lg:sticky bg-transparent dark:bg-transparent w-full z-20 top-0 start-0 
          ${isMenuOpen && !isScrolled ? 'inline z-40' : ''}
          ${isMenuOpen && isScrolled ? 'bg-gray-900 inline z-40' : ''}
          ${!isMenuOpen && !isScrolled ? 'xl:inline' : ''}
          ${!isMenuOpen && isScrolled ? '' : ''}`}
      >
        <div className={`max-w-screen-2xl flex flex-wrap items-center justify-between xl:mx-auto m-0 p-0 xl:p-8 xl:px-22
          `}>
          <a href="#" className={`z-30 cursor-pointer xl:m-0 m-6 flex animate-fade-down animate-once text-2xl font-customcode font-semibold text-clementine-600
            ${isMenuOpen && !isScrolled ? '' : ''}
            ${isMenuOpen && isScrolled ? 'hidden' : ''}
            ${!isMenuOpen && !isScrolled ? '' : ''}
            ${!isMenuOpen && isScrolled ? 'hidden' : ''}`}>
              <span>
                <span className="text-clementine-600">{ "{ " }</span> 
                <span className="text-clementine-500">nicolas</span> 
                <span className="text-clementine-600">{ " }" }</span>
              </span>
          </a>
          <div className={`group flex xl:order-2 space-x-3 xl:space-x-0 rtl:space-x-reverse animate-fade-down animate-once mx-4
            ${isMenuOpen && isScrolled ? 'hidden' : ''}
            ${!isMenuOpen && isScrolled ? 'hidden' : ''}`}>
              <a target="_blank" href="/curriculum.pdf" className={`cursor-pointer hidden relative xl:inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 px-6 font-medium text-clementine-100 hover:text-clementine-600 hover:delay-200 text-xl
                ${!isMenuOpen && isScrolled ? 'hidden' : ''}`} id="contactBtn">
                <span className="absolute h-56 w-100 rounded-full bg-clementine-600 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
                <span className="relative">
                  <div className="flex items-center space-x-3">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 group-hover:animate-jump">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                    </svg> */}
                    <svg className="w-6 h-6 group-hover:animate-jump" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
                    </svg>

                    <span>Ver CV</span>
                  </div>
                </span></a>
          </div>

          <div 
            className={`fixed top-0 left-0 right-0 text-2xl w-full animate-flip-down animate-once
              ${isMenuOpen ? 'bg-gray-900 h-full z-40 lg:text-4xl' : '' }
              ${!isMenuOpen && !isScrolled ? 'xl:mt-10 hidden xl:inline' : ''}
              ${!isMenuOpen && isScrolled ? 'xl:mt-10 hidden' : ''}`}
            id="navbar-sticky"
            ref={menuRef}
          >
            <ul 
            className={`animate-fade-down animate-once flex flex-col xl:space-x-12 rtl:space-x-reverse text-center p-4 font-medium rounded-lg xl:p-0 w-full xl:w-auto items-center bg-gray-900 xl:bg-transparent rounded-2xl xl:rounded-none
              ${isMenuOpen ? 'justify-evenly h-full' : ''}
              ${!isMenuOpen && !isScrolled ? 'xl:justify-center xl:flex-row xl:h-auto' : ''}
              ${!isMenuOpen && isScrolled ? 'h-full' : ''}`}
              id="navbar-list" 
              ref={navbarListRef}
              onClick={closeMenuHandler}
            >
              {
                listaNavbar.map(item => (
                  <li key={item.href}>
                    <a href={item.href} className="inline py-2 px-3 text-gray-90 xl:hover:text-clementine-100 xl:dark:hover:text-clementine-500 transition-color duration-300 dark:text-clementine-100 dark:hover:text-white dark:border-gray-700">{item.name}</a>
                  </li>
                ))
              }
              <li key="contact">
                <a target="_blank" href="/curriculum.pdf" className={`xl:hidden inline py-2 px-3 text-gray-90 xl:hover:text-clementine-100 xl:dark:hover:text-clementine-500 transition-color duration-300 dark:text-clementine-100 dark:hover:text-white dark:border-gray-700
                  ${isMenuOpen ? 'xl:inline xl:mr-10' : ''}`}>
                    Ver CV
                </a>
              </li>
            </ul>

          </div>
        </div>
      </motion.nav>
      {/* </Transition> */}
      </>
  )
}

export default Header;