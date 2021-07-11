import React from 'react';
import { heroes } from '../../data/heroes';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';

const SearchScreen = () => {
	const [Values, handleInputChange, reset] = useForm({
		searchInput: 'find your hero',
	});

	const { searchInput } = Values;

	const heroesFiltered = heroes;

	const handleSearch = (e) => {
		e.preventDefault();
		console.log(searchInput);
		reset();
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
				{heroesFiltered.map((hero) => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</div>
	);
};

export default SearchScreen;
