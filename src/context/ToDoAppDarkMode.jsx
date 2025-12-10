import { createContext, useContext, useState, useEffect } from "react";

const ToDoDarkModeContext = createContext();

export function ToDoDarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  const onUpdateDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <ToDoDarkModeContext.Provider value={{darkMode, onUpdateDarkMode}}>
      {children}
    </ToDoDarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(ToDoDarkModeContext); // useDarkMode 리액트훅을 사용할 수 있도록 선언.

function updateDarkMode(darkMode) {
  if(darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}
