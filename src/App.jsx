import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';


class App extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            todos : this.props.initialData
        }
        
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        
    }

    nextId() {
        this._nextId = this._nextId || 4;
        return this._nextId++
    }

    handleStatusChange(id){
        const todos = this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });

        this.setState({todos});
    }

    handleAdd(title) {
        let todo  = {
            id : this.nextId(),
            title,
            completed : false
        };

        let todos = [ ...this.state.todos, todo];

        this.setState({ todos });
    }

    handleDelete(id){
        let todos = this.state.todos.filter(todo =>todo.id!==id);
        
        return this.setState({todos});
    }


    render() {
        return (
            <main>
            <Header title={this.props.title} todos={this.state.todos} />

            <section className="todo-list">
                {this.state.todos.map(todo =>
                    <Todo 
                        key = {todo.id}
                        id = {todo.id}
                        title = {todo.title}
                        completed = {todo.completed}
                        onStatusChange={this.handleStatusChange}
                        onDelete={this.handleDelete}  />
                )}
            </section>
            <Form onAdd={this.handleAdd} />
        </main>
        );
    }
}


App.propTypes = {
    title : PropTypes.string,
    initialData : PropTypes.array.isRequired,
    id : PropTypes.any,
};

App.defaultProps = {
    title : 'React Todo'
}

export default App;