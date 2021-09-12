import React from 'react';
import Todo from './Todo';
import NewTodoForm from './NewTodoForm';
import './TodoList.css'

class TodoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: [],
		}
		this.addTodo = this.addTodo.bind(this);
		this.removeTodo = this.removeTodo.bind(this);
	}

	componentDidUpdate() {
		console.log(this.state.todos)
		localStorage.setItem('todos', JSON.stringify(this.state.todos))
	}

	componentDidMount() {
		const todosStore = JSON.parse(localStorage.getItem('todos'));
		if (todosStore !== null) {
			this.setState({todos: todosStore})
		}
	}

	addTodo(newTodo) {
		this.setState(state => ({
			todos: [...state.todos, newTodo]
		}))
	}
	removeTodo(id) {
		this.setState({
			todos: this.state.todos.filter(todo => todo.id !== id)
		})
	}
	render() {
		console.log(this.state.todos)
		const todos = this.state.todos.map(todo =>
			<Todo id={todo.id}
						key={todo.id}
						task={todo.task}
						isEditing={todo.isEditing}
						removeTodo={this.removeTodo}
			/>
		)
		return (
			<>
				<NewTodoForm addTodo={this.addTodo}/>
				<ul>
					{todos}
				</ul>
			</>
		)
	}
}

export default TodoList;
