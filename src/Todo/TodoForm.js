import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoForm = ({ value, onSubmit, dispatch }) => {
  return (
    <div className="formWrap">
    <form onSubmit={onSubmit}>
      <div className="searchBox">
        <FontAwesomeIcon icon="plus-circle" className="searchIcon"/>
        <input
        type="text"
        name="todo"
        value={value}
        className="addTodoInput"
        onChange={(e) => dispatch({ type: 'CHANGE_TEXT', payload: e.target.value })}/>
      </div>
      
      <button type="submit" className="btnStyle defaultBtn addBtn">
      <FontAwesomeIcon icon="plus"/> Add
      </button> 
    </form>
    </div>
  );
};

export default TodoForm; 
