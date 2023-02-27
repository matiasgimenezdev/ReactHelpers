export function todoReducer(state, action) {
	switch (action.type) {
		case 'addTodo':
			return [...state, action.payload];
		case 'removeTodo':
			return state.filter((todo) => todo.id !== action.payload.id);
		case 'toggleTodo':
			return state.map((todo) => {
				if (todo.id === action.payload.id) {
					return { ...todo, done: !todo.done };
				} else {
					return todo;
				}
			});
		default:
			return state;
	}
}
