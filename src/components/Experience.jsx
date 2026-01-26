import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { experiences } from '../content/config';
import Icon from './icons/Icon';

function Experience () {
  useEffect(() => {AOS.init()}, []);

  return (
    <div className="mx-auto px-4 py-8 z-1" id="experience">

      <div className="flex items-center justify-center text-clementine-600 text-center space-x-2 lg:space-x-4 mb-12 text-center" data-aos="fade-down">
        <svg className="w-8 h-8 lg:w-14 lg:h-14 mt-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.99999 10.8571 12 13.1428m-4.00001-2.2857L4 13.1428m3.99999-2.2857.00004-4.57139M12 13.1428v4.5715m0-4.5715-4.00001 2.2857M12 13.1428l4-2.2857m-4 2.2857V8.57143m0 4.57137 4 2.2858m-4 2.2857L7.99999 20M12 17.7143 16 20m-8.00001 0L4 17.7143v-4.5715M7.99999 20v-4.5715M4 13.1428l3.99999 2.2857M16 6.28571 12 4 8.00003 6.28571m7.99997 0v4.57139m0-4.57139-4 2.28572m4 2.28567 4 2.2858M8.00003 6.28571 12 8.57143m8 4.57147v4.5714L16 20m4-6.8571-4 2.2857M16 20v-4.5714"/>
        </svg>


        <h2 className="text-4xl lg:text-6xl font-bold">
          Experiencia
        </h2>
      </div>
      
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-x-10 md:pl-10">
        {experiences.map((exp) => (
          <div 
            key={exp.id} 
            data-aos={exp.id % 2 === 0 ? "fade-left" : "fade-right"}
            className="bg-gray-800 rounded-lg shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-xl max-w-lg object-cover hover:scale-105 transition-transform duration-500 animate-none"
          >
            <div className="mb-4">
              <h3 className="text-xl font-bold text-clementine-500 mb-2">
                {exp.position}
              </h3>
              <h4 className="text-lg font-semibold text-clementine-700 mb-1">
                {exp.company}
              </h4>
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="font-medium">{exp.duration}</span>
              </div>
            </div>

            <p className="text-clementine-200 mb-4 italic">
              {exp.description}
            </p>

            <div className="mb-4">
              <h5 className="font-semibold text-clementine-400 mb-2">Responsabilidades:</h5>
              <ul className="list-disc list-inside space-y-5 text-clementine-200">
                {exp.responsibilities.map((resp, index) => (
                  <li key={index} className="text-base">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;