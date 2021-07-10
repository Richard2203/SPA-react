import React from 'react';
import { getHeroByIdPublisher } from '../../selectors/getHeroByIdPublisher';

const HeroList = ({ publisher }) => {
	const heroes = getHeroByIdPublisher(publisher);
	return (
		<ul>
			{heroes.map((hero) => (
				<li key={hero}>{hero.superhero}</li>
			))}
		</ul>
	);
};

export default HeroList;
