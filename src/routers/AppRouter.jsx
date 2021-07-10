import React from 'react';
// Las rutas padres/principales se manejan con BrowserRouter
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';

// Por convencion el archivo AppRouter sera el archivo de rutas principal
const AppRouter = () => {
	return (
		// el archivo de rutas principal contiene la etiqueta Router
		<Router>
			{/* el contenido entre el div y Switch se volvera contenido o estilos 
			globales que apareceran en todos los componentes*/}
			<div>
				<Switch>
					<Route exact path="/login" component={LoginScreen} />
					<Route path="/" component={DashboardRouter} />
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
