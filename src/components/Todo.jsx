import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from "./Button";

const Todo = (props) => {

    return (
        <div className= {`todo${props.completed ? ' completed' : ''}`}>
            <Checkbox checked={props.completed}
            onChange={() => props.onStatusChange(props.id)} />
            <span className="todo-title">{props.title}</span>
            <Button className="delete icon" icon="delete"
            onClick={() => props.onDelete(props.id)} />
        </div>
    );
};

Todo.propTypes = {
    completed : PropTypes.bool.isRequired,
    title : PropTypes.string.isRequired,
    onStatusChange : PropTypes.func.isRequired,
    onDelete : PropTypes.func.isRequired
};

export default Todo;
