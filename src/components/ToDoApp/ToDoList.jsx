import React, { useEffect, useState } from "react";
import Item from "./Item";
import AddForm from "./AddForm";

export default function ToDoList({ menu }) {
  const [items, setItems] = useState(() => getLocalStorage()); // localStorage
  const handleAddItem = (item) => {
    setItems([...items, item]);
  }
  const handleDelete = (deleted) => {
    setItems(items.filter((item) => item.id !== deleted.id));
  }
  const handleUpdate = (updated) => {
    setItems(items.map((item) => item.id === updated.id ? updated : item));
  }
  const itemList = getFilterdList(items, menu);
  useEffect(() => {
    localStorage.setItem('ToDoList', JSON.stringify(items));
  }, [items]);
  return (
    <section className="todo-main">
      <ul className="todo-list">
        {itemList.length === 0 && (
          <li className="todo-empty">등록된 할 일이 없습니다.</li>
        )}
        {itemList.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </ul>
      <AddForm onAdd={handleAddItem} />
    </section>
  );
}

function getFilterdList(items, menu) {
  if(menu === 'all') return items;
  else return (items.filter((item) => item.status === menu));
}

function getLocalStorage() {
  const ToDoList = localStorage.getItem('ToDoList');
  return ToDoList ? JSON.parse(ToDoList) : [];
}
