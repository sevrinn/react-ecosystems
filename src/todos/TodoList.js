import React from 'react'
import TodoListItem from './TodoListItem'
import NewTodoForm from './NewTodoForm'
import './TodoList.css'

//TodoList takes todos as a prop and maps out each todo
const TodoList = ({ todos = [{ text: 'hello' }] }) => (
	<div className='list-wrapper'>
		<NewTodoForm />
		{todos.map((todo) => (
			<TodoListItem todo={todo} />
		))}
	</div>
)

export default TodoList
