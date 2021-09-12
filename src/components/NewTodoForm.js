import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';


export default class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {task: ''}

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		})
	}
	handleSubmit(evt) {
		evt.preventDefault()
		const newTodo = {...this.state, completed: false, id: uuid()}
		this.props.addTodo(newTodo);
		this.setState({task: '', id: ''})
	}


	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor="task">New Todo: </label>
				<input
					id="task"
					name="task"
					type="text"
					placeholder="New Todo"
					value={this.state.task}
					onChange={this.handleChange}
				/>
				<button>Add Todo!</button>
			</form>
		)
	}
}
