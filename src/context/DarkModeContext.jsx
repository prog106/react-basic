import { useState, createContext } from "react";

export const DarkModeContext = createContext(); // Context 선언 - 데이터

export function DarkModeProvider({ children }) { // Context Provider 선언 - 부모 우산 컴포넌트
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((mode) => !mode);
  return (
    <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
      {children}
    </DarkModeContext.Provider>
  )
}
