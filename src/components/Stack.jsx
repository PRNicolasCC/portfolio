import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { languages } from "../content/config";

import Icon from './icons/Icon';

function Stack() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 lg:pl-20 xl:pl-0 py-8 z-1" id="stack">
      <div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4 mb-12" data-aos="fade-down">
        <svg className="w-8 h-8 lg:w-14 lg:h-14 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"/>
        </svg>
        <h2 className="text-4xl lg:text-6xl font-bold">
          Stack
        </h2>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {languages.map((category) => (
          <div
            key={category.id}
            className="bg-gray-800 rounded-lg shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl object-cover hover:scale-105 transition-transform duration-500 animate-none"
            data-aos={category.id % 2 === 0 ? "fade-up" : "fade-down"}
          >
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl"><Icon nombre={category.icon.name} classes={category.icon.classes} /></span>
                <h3 className="text-xl font-bold text-clementine-500">
                  {category.name}
                </h3>
              </div>
              
              <p className="text-clementine-200 text-base italic">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-3">
              {category.technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="bg-clementine-100 rounded-lg py-2 px-9 lg:px-12 flex flex-col items-center justify-center hover:bg-clementine-200 transition-colors group relative"
                  title={tech.name}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon nombre={tech.icon} classes={`w-full h-full ${tech.classes}`} />
                  </div>

                  <div className="text-clementine-900 font-semibold">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stack;