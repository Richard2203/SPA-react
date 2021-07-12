import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

const LoginScreen = () => {
	// el hook useHistory nos da acceso a la instancia "historial" que puede
	// usarse para navegar de diversas formas entre componentes/pestanias.
	// es posible hacer uso del hook useHistory puesto que este componente
	// esta envuelto en un componente de orden superior (componente Router)
	let history = useHistory();
	const { dispatch } = useContext(AuthContext);

	const handleLogin = () => {
		// busca en localStorage la existencia del ultimo path visitado
		// si no existe entonces retorna '/'; esto para enviar al usuario
		// a su ultima pagina visitada al momento de dar login
		const path = localStorage.getItem('lastPath') || '/';

		// .push(<ruta:string>) redirige hacia la ruta indicada en el argumento
		// history.push('/');

		// .replace('/') redirige hacia la ruta indicada PERO sin guardar en
		// history esa redireccion por lo cual al intentar regresar se queda
		// en el mismo lugar

		const action = {
			type: types.login,
			payload: { name: 'paquito' },
		};

		// colocando primero o el dispatch o primero el history se obtiene
		// el mismo resultado y es porque React ejecuta primero todo lo
		// sincrono y dispatch es de naturaleza sincrona por lo cual
		// no importa su orden se ejecutara primero que history
		dispatch(action);

		// histroy es asincrono puesto que trabaja con navegaciones
		history.replace(path);
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
