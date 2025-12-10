import React from "react";
import { FaTrashCan } from 'react-icons/fa6';

export default function Item({ item, onDelete, onUpdate }) {
  const { id, title, status } = item;
  const handleDelete = (() => onDelete(item));
  const handleUpdate = (() => onUpdate({...item, status: (status === 'complete' ? 'active' : 'complete')}));
  return (
    <li className="todo-item">
      <input
        className="todo-checkbox"
        type='checkbox'
        id={id}
        checked={status === 'complete'}
        onChange={handleUpdate}
      />
      <label
        className={"todo-label" + (status === 'complete' ? " completed" : "")}
        htmlFor={id}
      >
        {title}
      </label>
      <button className="todo-delete-button" onClick={handleDelete}>
        <FaTrashCan />
      </button>
    </li>
  );
}
