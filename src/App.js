import React, { useReducer, useEffect } from "react";
import TodoForm from './Todo/TodoForm';
import TodoList from './Todo/TodoList';
import TodoFilter from './Todo/TodoFilter';
import { todoReducer, initialState } from "./reducer/todoReducer";


const App = () => {
    const [todo, dispatch] = useReducer(todoReducer, initialState);

    const loadData = async () => {
        dispatch({ type: 'LOADING', payload: true });
        try {
            const res = await fetch('http://localhost:3000/todo');
            const todos = await res.json();
            dispatch({ type: 'LOAD_TODO', payload: todos });
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        } finally {
            dispatch({ type: 'LOADING', payload: false });
        }
    };

    const addTodo = async () => {
        dispatch({ type: 'LOADING', payload: true });
        try {
            const res = await fetch('http://localhost:3000/todo', {
                method: 'POST',
                body: JSON.stringify({ text: todo.todoText, isDone: false }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const newTodo = await res.json();
            dispatch({ type: 'ADD_TODO', payload: newTodo });
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        } finally {
            dispatch({ type: 'LOADING', payload: false });
        }
    };

    const deleteTodo = async (id) => {
        dispatch({ type: 'LOADING', payload: true });
        try {
            console.log('inside delete');
            dispatch({ type: 'REMOVE_TODO', payload: id })
            const res = await fetch('http://localhost:3000/todo/'+ id, {
                method: 'DELETE',
            })
        } catch (error) {
            dispatch({ type: 'ERROR', payload: error });
        }
        finally{
            dispatch({ type: 'LOADING', payload: false });
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo();
    };

    useEffect(() => {
        loadData();
    }, []);


    if (todo.loading) {
        return <h1>Loading...</h1>;
    }

    if (todo.error) {
        return <h1>Oops! something went wrong</h1>;
    }

    return (
        <>
            <h1>To Do App</h1>
            <TodoForm value={todo.todoText} onSubmit={onSubmit} dispatch={dispatch} />
            {/* <TodoList todoList={todo.filteredData} dispatch={dispatch} onDelete={deleteTodo(todo.id)} /> */}
            <TodoList todoList={todo.filteredData} dispatch={dispatch} onDelete={deleteTodo}/>
            <TodoFilter dispatch={dispatch} />
        </>
    )
}

export default App;