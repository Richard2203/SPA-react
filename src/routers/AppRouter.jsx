import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import MarvelScreen from '../components/marvel/MarvelScreen';
import LoginScreen from '../components/login/LoginScreen';

// Por convencion el archivo AppRouter sera el archivo de rutas principal
const AppRouter = () => {
	return (
		<Router>
			<div>
				<Navbar />

				<Switch>
					<Route exact path="/login">
						<LoginScreen />
					</Route>
					<Route exact path="/">
						<MarvelScreen />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
