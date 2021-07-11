import { heroes } from '../data/heroes';

export const getHeroByName = (superhero = '') => {
	if (superhero === '') return [];
	const _superhero = superhero.toLowerCase();
	return heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(_superhero)
	);
};
