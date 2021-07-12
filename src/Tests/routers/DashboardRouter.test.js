import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import DashboardRouter from '../../routers/DashboardRouter';

describe('Pruebas en el componente DashboardRouter', () => {
	test('debe renderizar correctamente el componente', () => {
		const contextValue = {
			dispatch: jest.fn(),
			user: {
				name: 'paquito',
				logged: true,
			},
		};

		// Debido a que DashboardRouter trabaja con rutas (link,navlink,redirect
		// ,etc) debemos usar Router pero como son prueba se debe usar mediante
		// MemorRouter

		// DashboardRouter depende de AuthContext por lo cual es necesario
		// pasarle la informacion mediante un componente de orden superior
		// (AuthContext.Provider)
		const wrapper = mount(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter>
					<DashboardRouter />
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(wrapper).toMatchSnapshot();
	});
});
