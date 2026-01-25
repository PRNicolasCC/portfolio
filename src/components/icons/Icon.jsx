import { 
  SiHtml5, 
  SiCss3, 
  SiJquery, 
  SiJavascript, 
  SiPhp, 
  SiTailwindcss, 
  SiPython, 
  SiFastapi,
  SiDjango,
  SiAngular,
  SiTypescript
} from "react-icons/si";
import { FaReact, FaWordpress, FaJava } from "react-icons/fa6";
import { FaBootstrap, FaLaravel, FaUbuntu } from "react-icons/fa";
import { GrMysql, GrDocker } from "react-icons/gr";
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
  php: SiPhp,
  laravel: FaLaravel,
  python: SiPython,
  fastapi: SiFastapi,
  django: SiDjango,
  angular: SiAngular,
  typescript: SiTypescript,
  wordpress: FaWordpress,
  java: FaJava,
  mysql: GrMysql,
  postgresql: BiLogoPostgresql,
  ubuntu: FaUbuntu,
  redhat: DiRedhat,
  docker: GrDocker,
};

const Icon = ({ nombre, color, classes, ...props }) => {
  const IconComponent = iconMap[nombre];
  
  if (!IconComponent) {
    return null; // o un ícono por defecto
  }
  
  return <IconComponent color={color} className={`w-full h-full ${classes}`} />;
};

export default Icon;