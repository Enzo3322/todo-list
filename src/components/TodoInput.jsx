import React, { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
export const TodoInput = ({ createTodoItem }) => {
	const [value, setValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) {
			return alert('Preencha o campo!');
		}
		createTodoItem(value);
		setValue('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Criar tarefa"
				value={value}
				className="create-input"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className="create-button" onClick={handleSubmit}>
				<AiFillPlusCircle style={{ color: '#fff', fontSize: '30px' }} />
			</button>
		</form>
	);
};
