import React from 'react';
import { getHeroByIdPublisher } from '../../selectors/getHeroByIdPublisher';

const HeroList = ({ publisher }) => {
	const heroes = getHeroByIdPublisher(publisher);
	console.log(heroes);
	return (
		<ul>
			{heroes.map((hero) => (
				<li key={hero.id}>{hero.superhero}</li>
			))}
		</ul>
	);
};

export default HeroList;
