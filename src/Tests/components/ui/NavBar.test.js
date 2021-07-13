import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';
import { AuthContext } from '../../../auth/AuthContext';
import { Navbar } from '../../../components/ui/Navbar';
import { types } from '../../../types/types';

describe('Pruebas en el componente NavBar', () => {
	const contextValue = {
		dispatch: jest.fn(),
		user: {
			name: 'paquito',
			logged: true,
		},
	};

	// el metodo handleLogout hace uso de history.replace y para poder verificar
	// que este metodo haya sido ejecutado debemos pasarle un mock mediante
	// Router con la propiedad history
	const historyMock = {
		replace: jest.fn(), //metodo replace que manipularemos, el resto esta
		// por requerimiento de Router
		listen: jest.fn(),
		push: jest.fn(),
		location: {},
		createHref: jest.fn(),
	};

	const wrapper = mount(
		<AuthContext.Provider value={contextValue}>
			<MemoryRouter>
				<Router history={historyMock}>
					<Navbar />
				</Router>
			</MemoryRouter>
		</AuthContext.Provider>
	);

	afterEach(() => {
		// es buena practica limpiar los mocks despues de cada tests. Al colocarlo
		// aqui indicamos que este metodo se ejecuta tras la finalizacion de cada
		// test
		jest.clearAllMocks();
	});

	test('debe renderizar correctamente el componente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('debe ejecutar dispatch y hisory.replace', () => {
		// disparando el evento click del boton
		wrapper.find('button').prop('onClick')();

		// verificando que el metodo dispatch contenido dentro del evento
		// click del boton fuera disparado una vez con los argumentos
		// correspondientes
		expect(contextValue.dispatch).toHaveBeenCalledTimes(1);
		expect(contextValue.dispatch).toHaveBeenCalledWith({
			type: types.logout,
		});

		// verificando que el metodo replace contenido dentro del evento
		// click del boton fuera disparado una vez con los argumentos
		// correspondientes
		expect(historyMock.replace).toHaveBeenCalledTimes(1);
		expect(historyMock.replace).toHaveBeenCalledWith('/login');
	});
});
