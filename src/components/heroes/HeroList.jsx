import React, { useMemo } from 'react';
import { getHeroByIdPublisher } from '../../selectors/getHeroByIdPublisher';
import HeroCard from './HeroCard';

const HeroList = ({ publisher }) => {
	// empleamos useMemo para disparar el metodo de busqueda unicamente cuando
	// cambia el valor de publisher
	const heroes = useMemo(() => getHeroByIdPublisher(publisher), [publisher]);

	return (
		<div className="row row-cols-1 row-cols-md-3 g-4">
			{heroes.map((hero) => (
				// colocando "..." significa que al enviar el objeto
				// desestructure todas las propiedades
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

export default HeroList;
