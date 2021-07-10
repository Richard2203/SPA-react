import React, { useMemo } from 'react';
import { useParams, Redirect, useHistory } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
	// el hook useParams() nos permite acceder a los parametros pasados por la URL
	// e incluso es posible desestructurarlos
	const { heroeId } = useParams();

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
		<div>
			<h1>Hero Screen</h1>
			<hr />
			<div className="row">
				<div className="col-md-4 animate__animated animate__fadeInLeft">
					<img
						src={`@/assets/heroes/${heroeId}.jpg`}
						alt={`${superhero}`}
					/>
				</div>
				<div className="col-md-8 animate__animated animate__fadeInLeft">
					<button
						className="btn btn-outline-warning"
						onClick={handleReturn}
					>
						Return
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroScreen;
