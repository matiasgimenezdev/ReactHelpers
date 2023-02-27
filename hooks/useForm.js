import { useState } from 'react';

export function useForm(initialForm = {}) {
	const [form, setForm] = useState(initialForm);

	const handleInputChange = ({ target }) => {
		const { name, value } = target;
		setForm({ ...form, [name]: value });
	};

	const handleReset = () => {
		setForm(initialForm);
	};

	return {
		form,
		handleInputChange,
		handleReset,
	};
}
