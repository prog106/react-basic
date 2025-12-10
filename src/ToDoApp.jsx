import React, { useState } from "react";
import ToDoList from "./components/ToDoApp/ToDoList";
import Navbar from "./components/ToDoApp/Navbar";
import "./ToDoApp.css";
import { ToDoDarkModeProvider } from "./context/ToDoAppDarkMode";

export default function ToDoApp() {
  const menuList = ['all', 'active', 'complete'];
  const [menu, setMenu] = useState(menuList[0]);
  const handleUpdate = (menu) => setMenu(menu);
  return (
    <ToDoDarkModeProvider>
      <div className="todo-app">
        <div className="todo-container">
          <Navbar menuList={menuList} menu={menu} onUpdate={handleUpdate} />
          <ToDoList menu={menu} />
        </div>
      </div>
    </ToDoDarkModeProvider>
  );
}
