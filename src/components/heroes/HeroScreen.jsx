import React, { useMemo } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
	// el hook useParams() nos permite acceder a los parametros pasados por la URL
	// e incluso es posible desestructurarlos
	const { heroeId } = useParams();

	// el hook useHistory nos da acceso a la instancia "historial" que puede
	// usarse para navegar de diversas formas entre componentes/pestanias.
	// es posible hacer uso del hook useHistory puesto que este componente
	// esta envuelto en un componente de orden superior (componente Router)
	const history = useHistory();

	// empleando useMemo para disparar el metodo de busqueda del heroe
	// unicamente cuando el heroeId cambia
	const hero = useMemo(() => getHeroById(heroeId), [heroeId]);

	// Redirect('<path:string>')
	// redirige a la ruta indica. Se implemento para que en caso de no existir
	// el hero no renderice el componente y de algun error
	if (!hero) return Redirect('./');

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	const handleReturn = () => {
		history.length <= 2 ? history.push('./') : history.goBack();
	};

	return (
		<div className="row mt-5">
			<div className="col-4">
				<img
					src={`../assets/heroes/${heroeId}.jpg`}
					alt={superhero}
					className="img-thumbnail animate__animated animate__fadeInLeft"
				/>
			</div>

			<div className="col-8 animate__animated animate__fadeInLeft">
				<h3> {superhero} </h3>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<b> Alter ego: </b> {alter_ego}
					</li>
					<li className="list-group-item">
						<b> Publisher: </b> {publisher}
					</li>
					<li className="list-group-item">
						<b> First appearance: </b> {first_appearance}
					</li>
				</ul>

				<h5> Characters </h5>
				<p> {characters} </p>

				<button className="btn btn-outline-info" onClick={handleReturn}>
					Return
				</button>
			</div>
		</div>
	);
};

export default HeroScreen;
