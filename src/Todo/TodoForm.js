import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoForm = ({ value, onSubmit, dispatch }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="todo"
        value={value}
        className="addTodoInput"
        onChange={(e) => dispatch({ type: 'CHANGE_TEXT', payload: e.target.value })}
      />
      <button type="submit" className="addBtn">
        Add Todo
      </button> 
      <FontAwesomeIcon icon="clock" /> 
      <FontAwesomeIcon icon="list" />
      Your <FontAwesomeIcon icon="check-circle" /> is hot and ready!
    </form>
  );
};

export default TodoForm;
