import { SiHtml5, SiCss3 } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { FaLinux } from "react-icons/fa";

const iconMap = {
  html: SiHtml5,
  css: SiCss3,
  javascript: SiJavascript,
  jquery: SiJquery,
  react: FaReact,
  bootstrap: FaBootstrap,
  tailwind: SiTailwindcss,
  node: SiNodedotjs,
  php: SiPhp,
  laravel: FaLaravel,
  python: SiPython,
  fastapi: SiFastapi,
  java: FaJava,
  mysql: GrMysql,
  linux: FaLinux
};

const Icon = ({ nombre, color, classes, ...props }) => {
  const IconComponent = iconMap[nombre];
  
  if (!IconComponent) {
    return null; // o un ícono por defecto
  }
  
  return <IconComponent color={color} className={`w-full h-full ${classes}`} />;
};

export default Icon;