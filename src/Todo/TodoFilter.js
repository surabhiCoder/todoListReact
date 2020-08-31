import React from 'react';

const TodoFilter = ({ dispatch }) => {
  return (
    <div className="filterWrap">
      <button
        type="button"
        name="all"
        className="btnStyle tabs"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'all' })}
      >
        ALL
      </button>
      <button
        type="button"
        name="pending"
        className="btnStyle tabs"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'pending' })}
      >
        PENDING
      </button>
      <button
        type="button"
        name="completed"
        className="btnStyle tabs"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'completed' })}
      >
        COMPLETED
      </button>
    </div>
  );
};

export default TodoFilter;