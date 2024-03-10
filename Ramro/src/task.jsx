import React from 'react';

function Task({ task, onDelete }) {
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {task}
        <button className="btn btn-danger" onClick={() => onDelete(task)}>
          Delete
        </button>
      </li>
    );
  }
  export default Task