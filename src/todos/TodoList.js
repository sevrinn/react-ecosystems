import React from 'react'
import TodoListItem from './TodoListItem'
import './TodoList.css'

//TodoList takes todos as a prop and maps out each todo
const TodoList = ({ todos }) => (
	<div className='list-wrapper'>
		{todos.map((todo) => (
			<TodoListItem todo={todo} />
		))}
	</div>
)

export default TodoList
