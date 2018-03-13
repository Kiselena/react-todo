import React from 'react';

const Stats = props => {
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.completed).length;
    let notCompleted = total - completed;


    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Всего задач:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Выполнено:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Осталось:</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default Stats;