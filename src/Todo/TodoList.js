import React from 'react';

const TodoList = ({ todoList, onDelete , onComplete}) => {
    return (
        <div>
            <For each="todo" of={todoList}>
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        name="isDone"
                        checked={todo.isDone}
                        onChange={() => onComplete(todo)}
                    />
                    <p
                        key={todo.id}
                        style={{
                            textDecoration: todo.isDone ? 'line-through' : 'none',
                        }}
                    >
                        {todo.text}
                    </p>
                    <button type="button" onClick={() => onDelete(todo.id)}>
                        Delete</button>
                    {/* <button type="button" onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                        Delete</button> */}
                </div>

            </For>
        </div>
    )
}

export default TodoList;