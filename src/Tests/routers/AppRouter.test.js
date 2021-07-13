import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en el componente AppRouter', () => {
	test('debe renderizar el login si no esta autenticado', () => {
		const contextValue = {
			user: { logged: false },
			dispatch: jest.fn(),
		};

		// hacemos uso de un componente de orden superior por lo cual requerimos
		// de mount en lugar de shallow

		// AppRouter hace uso de AuthContext y que esta siendo usada por un
		// useContext por lo cual para enviarle la informacion se pasa mediante
		// AuthContext.Provider
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
	});

	test('debe renderizar todos los componentes si esta autenticado', () => {
		const contextValue = {
			user: { logged: true, name: 'paquito' },
			dispatch: jest.fn(),
		};

		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<AppRouter />
			</AuthContext.Provider>
		);

		expect(wrapper.find('nav').exists()).toBe(true);
	});
});
