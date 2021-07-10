import React from 'react';
import { useParams, Redirect } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
	// el hook useParams() nos permite acceder a los parametros pasados por la URL
	// e incluso es posible desestructurarlos
	const { heroeId } = useParams();

	const hero = getHeroById(heroeId);

	// Redirect('<path:string>')
	// redirige a la ruta indica. Se implemento para que en caso de no existir
	// el hero no renderice el componente y de algun error
	if (!hero) return Redirect('./');

	const { superhero, publisher, alter_ego, first_appearance, characters } =
		hero;

	return (
		<div>
			<h1>Hero Screen</h1>
			<hr />
		</div>
	);
};

export default HeroScreen;
