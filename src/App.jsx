import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';


class App extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            todos : this.props.initialData
        }
        
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
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

    handleDelete(id){
        let todos = this.state.todos.filter(todo =>todo.id!==id);
        
        return this.setState({todos});
    }


    render() {
        return (
            <main>
            <Header title={this.props.title} />

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