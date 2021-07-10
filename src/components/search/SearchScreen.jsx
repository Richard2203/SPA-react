import React, { useState } from 'react';
import { heroes } from '../../data/heroes';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {
	const [Search, setSearch] = useState('');
	const heroesFiltered = heroes;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(Search);
		reset();
	};

	const handleInputChange = ({ target }) => {
		setSearch(target.value);
	};

	const reset = () => {
		setSearch('');
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
						placeholder="find your hero"
						name="search"
						autoComplete="off"
						onChange={handleInputChange}
						value={Search}
					/>
					<button className="btn btn-outline-primary" type="submit">
						Search
					</button>
				</form>
			</div>
			<div className="col-md-8">
				<h4>Results</h4>
				<hr />
				{heroesFiltered.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</div>
	);
};

export default SearchScreen;
