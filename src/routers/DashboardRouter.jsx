import React from 'react';
// las rutas hijas/secundarias se manejan con Switch y no con BrowserRouter
import { Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';

const DashboardRouter = () => {
	return (
		<>
			<Navbar />
			<div className="container mt-3">
				{/* el componente de rutas hijo no contiene la etiqueta Router */}
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					<Route exact path="/dc" component={DcScreen} />
					{/* para pasar argumentos por url se hace mediante
                    los ":" y sucesivamente el argumento */}
					<Route exact path="/hero/:heroeId" component={HeroScreen} />

					{/* Redirect es el default del switch */}
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};

export default DashboardRouter;
