import { AiOutlineCheck, AiOutlineClose, AiTwotoneEdit } from 'react-icons/ai';

export const TodoItem = ({
	item,
	index,
	deleteTodoItem,
	completeTodoItem,
	updateTodoItem,
}) => {
	return (
		<div
			className={`todo-list ${item.complete ? 'completed' : 'not_completed'}`}
		>
			<li>{item.todo}</li>
			<div className="btns">
				<button
					className="action-button complete"
					onClick={() => completeTodoItem(index)}
				>
					<AiOutlineCheck style={{ fontSize: '25px' }} />
				</button>
				<button
					className="action-button edit"
					onClick={() => updateTodoItem(index)}
				>
					<AiTwotoneEdit style={{ fontSize: '25px' }} />
				</button>
				<button
					className="action-button delete"
					onClick={() => deleteTodoItem(index)}
				>
					<AiOutlineClose style={{ fontSize: '25px', color: '#fff' }} />
				</button>
			</div>
		</div>
	);
};
