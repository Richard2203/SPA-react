import React, { useContext } from 'react';
// Las rutas padres/principales se manejan con BrowserRouter
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import PrivateRoute from '../auth/PrivateRoute';
import PublicRoute from '../auth/PublicRoute';
import { AuthContext } from '../auth/AuthContext';
import LoginScreen from '../components/login/LoginScreen';
import DashboardRouter from './DashboardRouter';

// Por convencion el archivo AppRouter sera el archivo de rutas principal
const AppRouter = () => {
	const { user } = useContext(AuthContext);

	return (
		// el archivo de rutas principal contiene la etiqueta Router
		<Router>
			{/* el contenido entre el div y Switch se volvera contenido o estilos 
			globales que apareceran en todos los componentes*/}
			<div>
				<Switch>
					<PublicRoute
						exact
						path="/login"
						component={LoginScreen}
						isAuthenticated={user.logged}
					/>

					<PrivateRoute
						path="/"
						isAuthenticated={user.logged}
						component={DashboardRouter}
					/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
