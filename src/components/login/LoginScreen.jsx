import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = () => {
	// el hook useHistory nos da acceso a la instancia "historial" que puede
	// usarse para navegar de diversas formas entre componentes/pestanias
	let history = useHistory();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// .push(<ruta:string>) redirige hacia la ruta indicada en el argumento
		// history.push('/');

		// .replace('/') redirige hacia la ruta indicada PERO sin guardar en
		// history esa redireccion por lo cual al intentar regresar se queda
		// en el mismo lugar
		console.log(types.login);
		const action = {
			type: types.login,
			payload: { name: 'paquito' },
		};
		dispatch(action);
		history.replace('/');
	};

	return (
		<div>
			<h2>LoginScreen</h2>
			<hr />
			<button className="btn btn-outline-primary" onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default LoginScreen;
