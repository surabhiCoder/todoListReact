import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoList = ({ todoList, onDelete, onComplete }) => {
    return (
        <div>
            <For each="todo" of={todoList}>
                <div key={todo.id} className="todoListWrap">
                    <div className="sideBy">
                        <input
                            id={todo.id}
                            type="checkbox"
                            name="isDone"
                            checked={todo.isDone}
                            className="checkboxInp"
                            onChange={() => onComplete(todo)}
                        />
                        <label
                            htmlFor={todo.id}
                            key={todo.id}
                            style={{
                                textDecoration: todo.isDone ? 'line-through' : 'none',
                            }}
                            className="checkboxLbl"
                        >
                            {todo.text}
                        </label>
                    </div>

                    <button type="button" className="floatRight btnStyle secondaryBtn" onClick={() => onDelete(todo.id)}>
                        <FontAwesomeIcon icon="times" /> Delete</button>


                    {/* <button type="button" onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                        Delete</button> */}
                </div>

            </For>
        </div>
    )
}

export default TodoList;