import { heroes } from '../data/heroes';

export const getHeroByIdPublisher = (id) => {
	return heroes.find((hero) => hero.id === id);
};
