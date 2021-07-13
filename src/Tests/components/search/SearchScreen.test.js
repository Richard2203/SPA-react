import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter, Router, useLocation } from 'react-router-dom';

import SearchScreen from '../../../components/search/SearchScreen';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: jest.fn(),
}));

describe('Tests SearchScreen component', () => {
	test('Should display correctly', () => {
		useLocation.mockReturnValueOnce({ search: '' });

		const wrapper = mount(<SearchScreen />);

		expect(wrapper).toMatchSnapshot();
	});

	test('Should return a batman card and set input with batman', () => {
		const hero = 'batman';
		const query = `q=${hero}`;
		useLocation.mockReturnValueOnce({ search: query });

		const wrapper = mount(
			<MemoryRouter>
				<SearchScreen />
			</MemoryRouter>
		);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe(hero);
	});

	test('Should call submit and return a superman card and set input with superman', () => {
		const hero = 'superman';
		const query = `q=${hero}`;
		const history = {
			push: jest.fn(),
			listen: jest.fn(),
			location: { pathname: '/search' },
			createHref: jest.fn(),
		};

		useLocation.mockReturnValueOnce({ search: query });

		const wrapper = mount(
			<Router history={history}>
				<SearchScreen />
			</Router>
		);

		wrapper.find('form').prop('onSubmit')({ preventDefault() {} });

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe(hero);
		expect(history.push).toHaveBeenCalledWith('?' + query);
	});

	test('Should call submit and show error if hero not found', () => {
		const hero = 'anything';
		const query = `q=${hero}`;
		const history = {
			push: jest.fn(),
			listen: jest.fn(),
			location: { pathname: '/search?q=an' },
			createHref: jest.fn(),
		};

		useLocation.mockReturnValueOnce({ search: query });

		const wrapper = mount(
			<Router history={history}>
				<SearchScreen />
			</Router>
		);

		wrapper.find('form').prop('onSubmit')({ preventDefault() {} });

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('input').prop('value')).toBe(hero);
		expect(history.push).toHaveBeenCalledWith('?' + query);
	});
});
