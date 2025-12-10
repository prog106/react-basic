import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { FaCheck } from 'react-icons/fa';

export default function AddForm({ onAdd }) {
  const [text, setText] = useState('');
  const handleOnChange = (e) => setText(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.trim().length === 0) return ;
    onAdd({id:uuidv4(), title:text, status:'active'});
    setText('');
  }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="todo-form-inner">
        <input
          className="todo-input"
          type='text'
          name='name'
          value={text}
          onChange={handleOnChange}
          placeholder="오늘 할 일을 입력하세요..."
        />
        <button className="todo-submit-button" type='submit'>
          <FaCheck />
        </button>
      </div>
    </form>
  );
}
