import { useEffect, useReducer } from 'react';
import { todoReducer } from '../06-useReducer/todoReducer';

const initialState = [];
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export function useTodo() {
	const [todos, dispatch] = useReducer(todoReducer, initialState, init);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleAddTodo = (todo) => {
		const action = { type: 'addTodo', payload: todo };
		dispatch(action);
	};

	const handleRemoveTodo = (todo) => {
		const removeAction = { type: 'removeTodo', payload: todo };
		dispatch(removeAction);
	};

	const handleToggleTodo = (todo) => {
		const toggleAction = { type: 'toggleTodo', payload: todo };
		dispatch(toggleAction);
	};

	return {
		todos,
		todosCount: todos.length,
		todosRemaining: todos.filter((todo) => !todo.done).length,
		handleAddTodo,
		handleRemoveTodo,
		handleToggleTodo,
	};
}
