import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

// lo datos de aqui son "props" no variables, las props no necesariamente
// se van a utilizar y para poder usarlas en el componente padre donde se
// manda a llamar este componente se emplea la sintaxis "{...<nomObjeto>}"
const HeroCard = ({
	id,
	superhero,
	publisher,
	alter_ego,
	first_appearance,
	characters,
}) => {
	console.log(id);
	return (
		// la etiqueta Link funciona de manera similar que "a"
		// la propiedad to===href
		<Link to={`./hero/${id}`} className="my-card">
			{/* implemetando template literals es posible hacer la insercion
            de las imagenes de manera dinamica */}
			<img
				src={`./assets/heroes/${id}.jpg`}
				className="img img-responsive"
				alt={superhero}
			/>
			<div className="profile-name">{superhero}</div>
			<div className="profile-position">{alter_ego}</div>
			<div className="profile-overview">
				<div className="profile-overview">
					<div className="row">
						<div className="col-ms-4">
							<h3>{publisher}</h3>
							<p>
								Primera aparición: <br />
								{first_appearance}
							</p>
							{alter_ego !== characters && <p>{characters}</p>}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default HeroCard;
