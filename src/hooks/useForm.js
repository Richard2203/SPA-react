import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [Values, setValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		setValues({
			...Values,
			[target.name]: target.value,
		});
	};

	return [Values, handleInputChange];
};
