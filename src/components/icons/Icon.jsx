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
  SiTypescript,
  SiSqlite 
} from "react-icons/si";
import { FaBootstrap, FaLaravel, FaUbuntu, FaServer  } from "react-icons/fa";
import { FaReact, FaWordpress, FaJava, FaFolderClosed  } from "react-icons/fa6";
import { GrMysql, GrDocker } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiRedhat } from "react-icons/di";
import { TbWorld } from "react-icons/tb";
import { PiPaintBrushFill } from "react-icons/pi";
import { IoServerSharp } from "react-icons/io5";

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
  sqlite: SiSqlite,

  website: TbWorld,
  code: FaFolderClosed,
  frontend: PiPaintBrushFill,
  backend: FaServer,
  systems: IoServerSharp,
};

const Icon = ({ nombre, classes, ...props }) => {
  const IconComponent = iconMap[nombre];
  
  if (!IconComponent) {
    return null; // o un ícono por defecto
  }
  
  return <IconComponent className={classes} />;
};

export default Icon;