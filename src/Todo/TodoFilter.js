import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TodoFilter = ({ dispatch }) => {
  return (
    <div className="filterWrap">
      <button
        type="button"
        id="all"
        className="btnStyle tabs activeTab"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'all' })}
      >
       <FontAwesomeIcon icon="list" className="allIcon" /> ALL
      </button>
      <button
        type="button"
        id="pending"
        className="btnStyle tabs"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'pending' })}
      >
       <FontAwesomeIcon icon="clock" className="pendingIcon" /> PENDING
      </button>
      <button
        type="button"
        id="completed"
        className="btnStyle tabs"
        onClick={() => dispatch({ type: 'CHANGE_STATUS', payload: 'completed' })}
      >
       <FontAwesomeIcon icon="check-circle" className="compltIcon" /> COMPLETED
      </button>
    </div>
  );
};

export default TodoFilter;