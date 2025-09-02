import Header from "../components/Header";
import Main from "../components/Main";

function Layout (props) {
/* import "../styles/global.css";

import Header from "../components/Header.astro";
//import { ClientRouter } from 'astro:transitions';
import Main from "../components/Main.astro"; */

return (
	
	<>
	{/* <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width" />
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		<meta name="generator" content={Astro.generator} />
		<title>{props.title}</title> 
		
		<!-- Google Fonts -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
		<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap" rel="stylesheet"> 
		<!-- Animación entre páginas (fade-in & fade-out) -->
		<!-- <ClientRouter /> -->
	</head>
	<body> */ }
		<div className="absolute inset-0 bg-white dark:bg-gray-950">
			<div 
			  className="absolute inset-0 opacity-[0.07] dark:opacity-[0.05]"
			  style={{
				backgroundImage: `
				  linear-gradient(135deg, #000 0px, transparent 1px),
				  linear-gradient(45deg, #000 0px, transparent 1px)
				`,
				backgroundSize: '16px 16px',
			  }}
			/>
			<div className="left-0 top-0 h-full w-full fixed z-0 inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />
		  </div>

		{/* Las clases 'overflow-hidden' y 'fixed' suelen hacer que las funcionalidades de SCROLL no funcionen correctamente, por lo que hay que tener mucha PRECAUCIÓN cuando se trabaje con funcionalidades de SCROLL para que clases como éstas no estén superpuestas */}
		<div className="z-20">
			<Header />
			<Main>
				{props.children}
			</Main>
		</div>
		{/* </body>
</html> */}
	</>
	
	)
}

export default Layout;