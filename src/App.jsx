import { useEffect, useState } from 'react';

import './App.scss';
import { TodoInput } from './components/TodoInput';
import { TodoItem } from './components/TodoItem';

function App() {
	const initialTodo = JSON.parse(window.localStorage.getItem('todoItens'));
	const [todoItems, setTodoItems] = useState(initialTodo ?? []);
	//persisitindo itens na lista mesmo recarregando a pagina
	useEffect(() => {
		window.localStorage.setItem('todoItens', JSON.stringify(todoItems));
	}, [todoItems]);
	//criando itens na lista
	const createTodoItem = (todo) => {
		const newTodoItems = [...todoItems, { todo, complete: false }];
		setTodoItems(newTodoItems);
	};
	// removendo itens na lista
	const deleteTodoItem = (index) => {
		const newTodoItems = [...todoItems];
		newTodoItems.splice(index, 1);
		setTodoItems(newTodoItems);
	};
	// concluindo itens na lista
	const completeTodoItem = (index) => {
		const newTodoItems = [...todoItems];
		newTodoItems[index].complete === false
			? (newTodoItems[index].complete = true)
			: (newTodoItems[index].complete = false);
		setTodoItems(newTodoItems);
	};

	const updateTodoItem = (index) => {
		const newTodoItems = [...todoItems];
		const item = newTodoItems[index];
		let newItem = prompt(`Alterar a tarefa '${item.todo}'?`, item.todo);
		let todoObj = { todo: newItem, complete: false };
		newTodoItems.splice(index, 1, todoObj);
		if (!newItem) {
			return;
		} else {
			item.todo = newItem;
		}
		setTodoItems(newTodoItems);
	};

	return (
		<div className="app">
			<TodoInput createTodoItem={createTodoItem} />
			{todoItems.map((item, index) => (
				<TodoItem
					key={index}
					index={index}
					item={item}
					deleteTodoItem={deleteTodoItem}
					completeTodoItem={completeTodoItem}
					updateTodoItem={updateTodoItem}
				/>
			))}
		</div>
	);
}
export default App;
