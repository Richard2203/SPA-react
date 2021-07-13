import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Pruebas en el componente AuthReducer', () => {
	const stateInitial = {
		name: 'paco',
		logged: true,
	};

	test('debe de retornar el estado por defecto', () => {
		const action = {
			type: 'default',
		};

		const stateDefault = authReducer(stateInitial, action);
		expect(stateDefault).toEqual(stateInitial);
	});

	test('debe de autenticar y colocar el name del usuario', () => {
		const action = {
			type: types.login,
			payload: {
				name: 'paco',
			},
		};

		const stateDefault = authReducer(stateInitial, action);
		expect(stateDefault).toEqual(stateInitial);
	});

	test('debe de borrar el name del usuario y logged en false', () => {
		const action = {
			type: types.logout,
		};

		const stateDefault = authReducer(stateInitial, action);
		expect(stateDefault).toEqual({ logged: false });
	});
});
