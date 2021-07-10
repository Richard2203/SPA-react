import React from 'react';
import HeroList from '../heroes/HeroList';

const MarvelScreen = () => {
	return (
		<div>
			<h2>Marvel Screen</h2>
			<hr />
			<HeroList publisher="Marvel Comics" />
		</div>
	);
};

export default MarvelScreen;
