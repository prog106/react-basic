import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { useDarkMode } from "../../context/ToDoAppDarkMode";

export default function Navbar({ menuList, menu, onUpdate }) {
  const { darkMode, onUpdateDarkMode } = useDarkMode();
  const handleUpdate = (menu) => onUpdate(menu);
  return (
    <nav className="todo-navbar">
      <button className="todo-delete-button" onClick={onUpdateDarkMode}>{darkMode?<HiMoon />:<HiSun />}</button>
      {/* <button onClick={handleUpdateDarkMode}><IoMoon /></button> */}
      <span className="todo-navbar-title">TODAY&apos;S TASKS</span>
      <ul className="todo-navbar-menu">
        {menuList.map((item, index) => (
          <li key={index}>
            <button
              className={
                "todo-navbar-button" + (menu === item ? " active" : "")
              }
              onClick={() => handleUpdate(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
