import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PrivateRoute from '../../auth/PrivateRoute';

describe('Pruebas en el componente PrivateContext', () => {
	Storage.prototype.setItem = jest.fn();

	test('debe de renderizar el componente si esta autenticado y guardar en LocalStorage', () => {
		const props = {
			location: {
				pathname: '/marvel',
				search: '?q=green',
			},
		};

		// MemoryRouter es un componente de orden superior que se emplea en pruebas,
		// su finalidad es envolver un componente ruta para simular ser un Router

		// Se deben de enviar las props para poder usarlas en localStorage, en
		// este caso se crea una simulacion de la ruta que se emplea en localStorage

		// en la propieadad componente se envia el componente como functional
		// component puesto que eso es lo que recibe PrivateRoute

		// Mount() al tener un componente de orden superior y un componente hijo
		// se deben renderizar ambos (en este caso); mount nos permite renderizar
		// ambos componentes mientras que shallow solo renderizaria MemoryRouter
		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={true}
					component={() => <span>Componente renderizado</span>}
					{...props}
				/>
			</MemoryRouter>
		);

		// html() muestra todo el contenido del componente incluyendo los
		// subcomponentes
		console.log(wrapper.html());

		expect(wrapper.find('span').exists()).toBe(true);

		// setItem debio llamarse una vez
		expect(localStorage.setItem).toHaveBeenCalledTimes(1);

		// setItem debio llamarse con los argumentos indicados
		expect(localStorage.setItem).toHaveBeenCalledWith(
			'lastPath',
			'/marvel?q=green'
		);
	});
	test('no debe de renderizar el componente si no esta autenticado', () => {
		const props = {
			location: {
				pathname: '/marvel',
				search: '?q=green',
			},
		};

		const wrapper = mount(
			<MemoryRouter>
				<PrivateRoute
					isAuthenticated={false}
					component={() => <span>Componente renderizado</span>}
					{...props}
				/>
			</MemoryRouter>
		);

		expect(wrapper.find('span').exists()).toBe(false);
	});
});
