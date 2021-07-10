import React from 'react';
import HeroList from '../heroes/HeroList';

const DcScreen = () => {
	return (
		<div>
			<h2>Dc Screen</h2>
			<hr />
			<HeroList publisher="DC Comics" />
		</div>
	);
};
export default DcScreen;
