import { heroes } from '../data/heroes';

export const getHeroByIdPublisher = (publisher) => {
	const validPublisher = ['DC Comics', 'Marvel Comics'];
	if (!validPublisher.includes(publisher))
		throw new Error(`No se encuentra "${publisher}"`);

	return heroes.filter((hero) => hero.publisher === publisher);
};
