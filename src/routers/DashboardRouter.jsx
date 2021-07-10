import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import DcScreen from '../components/dc/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';

const DashboardRouter = () => {
	return (
		<>
			<Navbar />
			<div>
				{/* el componente de rutas hijo no contiene la etiqueta Router */}
				<Switch>
					<Route exact path="/marvel" component={MarvelScreen} />
					{/* para pasar argumentos por url se hace mediante
                    los ":" y sucesivamente el argumento */}
					<Route exact path="/heroe:heroeId" component={HeroScreen} />
					<Route exact path="/dc" component={DcScreen} />

					{/* Redirect es el default del switch */}
					<Redirect to="/marvel" />
				</Switch>
			</div>
		</>
	);
};

export default DashboardRouter;
