import React, { useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// la libreria queryString nos permite hacer una manipulacion del path
// para usarla se debe instalar con "npm i query-string" que viene de la url
// https://www.npmjs.com/package/query-string
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroByName } from '../../selectors/getHeroByName';

const SearchScreen = () => {
	const location = useLocation();

	// el hook useHistory nos da acceso a la instancia "historial" que puede
	// usarse para navegar de diversas formas entre componentes/pestanias.
	// es posible hacer uso del hook useHistory puesto que este componente
	// esta envuelto en un componente de orden superior (componente Router)
	const history = useHistory();

	// .parse(<string>) nos permite convertir una cadena url (la seccion de
	// propiedades) en un objeto
	const { q = 'hero' } = queryString.parse(location.search);

	const [Values, handleInputChange] = useForm({
		searchInput: q,
	});

	const { searchInput } = Values;

	const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

	const handleSearch = (e) => {
		e.preventDefault();
		history.push(`?q=${searchInput}`);
	};

	return (
		<div className="row mt-5">
			<div className="col-md-4">
				<h4>Search Hero</h4>
				<hr />
				<form onSubmit={handleSearch}>
					<input
						type="text"
						className="form-control mb-2"
						name="searchInput"
						autoComplete="off"
						placeholder="find your hero"
						onChange={handleInputChange}
						value={searchInput}
					/>
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				</form>
			</div>
			<div className="col-md-8">
				<h4>Results</h4>
				<hr />

				{q === '' && (
					<div className="alert alert-primary">
						<p className="">teclea un heroe</p>
					</div>
				)}

				{heroesFiltered && q !== '' && (
					<div className="alert alert-danger">
						<p className="">No existe el heroe</p>
					</div>
				)}

				{heroesFiltered.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</div>
	);
};

export default SearchScreen;
