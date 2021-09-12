import React, { Component } from 'react';
import './Todo.css';

export default class Todo extends Component {
	constructor(props) {
		super(props);

		this.handleRemove = this.handleRemove.bind(this);
	}
	handleRemove(id) {
		this.props.removeTodo(this.props.id);
	}
	render() {
		return (
			<li>
				{this.props.task}
				<button onClick={this.handleRemove}>X</button>
			</li>
		)
	}
}
