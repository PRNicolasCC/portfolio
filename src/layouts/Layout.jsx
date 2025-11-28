import Header from "../components/Header";
import Main from "../components/Main";

function Layout (props) {

return (
	
	<>
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
	</>
	
	)
}

export default Layout;