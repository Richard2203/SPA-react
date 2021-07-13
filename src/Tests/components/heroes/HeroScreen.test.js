import { mount } from 'enzyme';
import { MemoryRouter, Router, Route } from 'react-router-dom';
import HeroScreen from '../../../components/heroes/HeroScreen';

describe('Pruebas en el componente HeroScreen', () => {
	const history = {
		length: 10,
		push: jest.fn(),
		goBack: jest.fn(),
	};

	test('debe de mostrar Redirect si no hay argumentos en el URL', () => {
		// initialEntries recibe un objeto y pasaremos un arreglo con los
		// argumentos a mostrar en la URL

		// history recibe argumentos que seran implementados por el custom hook
		// useHistory()
		const wrapper = mount(
			<MemoryRouter initialEntries={['/hero']}>
				<HeroScreen history={history} />
			</MemoryRouter>
		);

		expect(wrapper.find('Redirect').exists()).toBe(true);
	});

	test('debe de mostrar un hero si el parametro existe y se encuentra', () => {
		// para implementar la manipulacion del custom hook useParams
		// se debe enviar el componente mediante Route y las propiedades
		// path y component
		const wrapper = mount(
			// le enviamos la url donde estara el hero
			<MemoryRouter initialEntries={['/hero/marvel-spider']}>
				{/* path recibe la ruta tal cual la escribimos en  DashboardRoute*/}
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</MemoryRouter>
		);

		expect(wrapper.find('.row').exists()).toBe(true);
	});

	test('debe disparar el metodo push', () => {
		const history = {
			length: 1,
			push: jest.fn(),
			goBack: jest.fn(),
			location: { pathname: '/hero/marvel-spider' },
			listen: jest.fn(),
			createHref: jest.fn(),
			replace: jest.fn(),
		};

		// para implementar la manipulacion del custom hook useParams
		// se debe enviar el componente mediante Route y las propiedades
		// path (recibe la ruta tal cual la escribimos en  DashboardRoute) y
		// component

		// Se implemento con Router y no con MemoryRouter puesto que vamos
		// a manipular el custom hook useHistory
		const wrapper = mount(
			<Router history={history}>
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</Router>
		);

		wrapper.find('button').prop('onClick')();
		expect(history.push).toHaveBeenCalledWith('./');
		expect(history.goBack).not.toHaveBeenCalled();
	});

	test('debe disparar el metodo goBack', () => {
		const history = {
			length: 10,
			push: jest.fn(),
			goBack: jest.fn(),
			location: { pathname: '/hero/marvel-spider' },
			listen: jest.fn(),
			createHref: jest.fn(),
			replace: jest.fn(),
		};

		// para implementar la manipulacion del custom hook useParams
		// se debe enviar el componente mediante Route y las propiedades
		// path (recibe la ruta tal cual la escribimos en  DashboardRoute) y
		// component

		// Se implemento con Router y no con MemoryRouter puesto que vamos
		// a manipular el custom hook useHistory
		const wrapper = mount(
			<Router history={history}>
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</Router>
		);

		wrapper.find('button').prop('onClick')();
		expect(history.push).not.toHaveBeenCalled();
		expect(history.goBack).toHaveBeenCalled();
	});

	test('debe retornar Redirect si el heroe no existe', () => {
		const history = {
			length: 10,
			push: jest.fn(),
			goBack: jest.fn(),
			location: { pathname: '/hero/marvel-spider124' },
			listen: jest.fn(),
			createHref: jest.fn(),
			replace: jest.fn(),
		};

		// para implementar la manipulacion del custom hook useParams
		// se debe enviar el componente mediante Route y las propiedades
		// path (recibe la ruta tal cual la escribimos en  DashboardRoute) y
		// component

		// Se implemento con Router y no con MemoryRouter puesto que vamos
		// a manipular el custom hook useHistory
		const wrapper = mount(
			<Router history={history}>
				<Route path="/hero/:heroeId" component={HeroScreen} />
			</Router>
		);

		expect(wrapper.find('Redirect').exists()).toBe(true);
	});
});
