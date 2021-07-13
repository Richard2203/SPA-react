import { mount } from 'enzyme';
import { Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en el componente LoginScreen', () => {
	const historyMock = {
		push: jest.fn(),
		goBack: jest.fn(),
		location: { pathname: '/login' },
		listen: jest.fn(),
		createHref: jest.fn(),
		replace: jest.fn(),
	};

	const contextValue = {
		dispatch: jest.fn(),
		user: {
			name: 'paquito',
			logged: true,
		},
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<Router history={historyMock}>
				<LoginScreen />
			</Router>
		</AuthContext.Provider>
	);

	test('debe renderizar correctamente el componente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe de realizar el disptch y la navegacion', () => {
		wrapper.find('button').prop('onClick')();
		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.login,
			payload: { name: 'paquito' },
		});

		expect(historyMock.replace).toHaveBeenCalledWith('/');
	});

	// Aqui implementamos localStorage directamente mientras que en otras
	// pruebas implementamos localStorage mediante un mock, la razon es que
	// aqui no haremos pruebas referentes a cuantas veces se llama, como se llamo
	// con que argumentos, etc; simplemente ejecutamos localStorage y ya
	test('debe de ser llamado localStorage', () => {
		const handleLogin = wrapper.find('button').prop('onClick');

		// disparo handleLogin teniendo localStorage vacio por lo cual
		// redirecciona a '/'
		handleLogin();
		expect(historyMock.replace).toHaveBeenCalledWith('/');

		localStorage.setItem('lastPath', '/dc');
		// disparo handleLogin teniendo localStorage con una ruta y por ende
		// debe redireccionar a la ruta guardada
		handleLogin();
		expect(historyMock.replace).toHaveBeenCalledWith('/dc');
	});
});
