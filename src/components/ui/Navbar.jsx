import React, { useContext } from 'react';
import { Link, NavLink, Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const Navbar = () => {
	const {
		user: { name },
		dispatch,
	} = useContext(AuthContext);

	// el hook useHistory nos da acceso a la instancia "historial" que puede
	// usarse para navegar de diversas formas entre componentes/pestanias.
	// es posible hacer uso del hook useHistory puesto que este componente
	// esta envuelto en un componente de orden superior (componente Router)
	const history = useHistory();

	const handleLogout = () => {
		dispatch({ type: types.logout });
		history.replace('/login');
	};

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				Asociaciones
			</Link>

			<div className="navbar-collapse">
				<div className="navbar-nav">
					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/marvel"
					>
						Marvel Comics
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/dc"
					>
						DC Comics
					</NavLink>

					<NavLink
						activeClassName="active"
						className="nav-item nav-link"
						exact
						to="/search"
					>
						Search
					</NavLink>
				</div>
			</div>

			<div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
				<ul className="navbar-nav ml-auto">
					<span className="nav-item nav-link text-info">{name}</span>
					<button
						className="btn btn-outline-success"
						onClick={handleLogout}
					>
						Logout
					</button>
				</ul>
			</div>
		</nav>
	);
};
