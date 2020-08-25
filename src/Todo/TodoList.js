import React from 'react';

const TodoList = ({ todoList, dispatch, deleteTodo }) => {
    return (
        <div>
            <For each="todo" of={todoList}>
                <div key={todo.id}>
                    <input
                        type="checkbox"
                        name="isDone"
                        checked={todo.isDone}
                        onChange={() => dispatch({ type: 'COMPLETE_TODO', payload: todo.id })}
                    />
                    <p
                        key={todo.id}
                        style={{
                            textDecoration: todo.isDone ? 'line-through' : 'none',
                        }}
                    >
                        {todo.text}
                    </p>
                    <button type="button" onClick={deleteTodo(todo.id)}>
                        Delete</button>
                    {/* <button type="button" onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}>
                        Delete</button> */}
                </div>

            </For>
        </div>
    )
}

export default TodoList;