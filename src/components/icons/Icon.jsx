import { 
  SiHtml5, 
  SiCss3, 
  SiJquery, 
  SiJavascript, 
  /* SiNodedotjs,  */
  SiPhp, 
  SiTailwindcss, 
  SiPython, 
  SiFastapi,
  SiDjango,
  SiAstro,
  SiTypescript,
} from "react-icons/si";
import { FaReact, FaWordpress /* FaJava */ } from "react-icons/fa6";
import { FaBootstrap, FaLaravel, FaUbuntu /* FaLinux */ } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedhat } from "react-icons/di";

const iconMap = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  jquery: SiJquery,
  react: FaReact,
  bootstrap: FaBootstrap,
  tailwind: SiTailwindcss,
  /* node: SiNodedotjs, */
  php: SiPhp,
  laravel: FaLaravel,
  python: SiPython,
  fastapi: SiFastapi,
  django: SiDjango,
  astro: SiAstro,
  typescript: SiTypescript,
  wordpress: FaWordpress,
  /* java: FaJava, */
  mysql: GrMysql,
  /* linux: FaLinux, */
  postgresql: BiLogoPostgresql,
  ubuntu: FaUbuntu,
  redhat: DiRedhat,
};

const Icon = ({ nombre, color, classes, ...props }) => {
  const IconComponent = iconMap[nombre];
  
  if (!IconComponent) {
    return null; // o un ícono por defecto
  }
  
  return <IconComponent color={color} className={`w-full h-full ${classes}`} />;
};

export default Icon;