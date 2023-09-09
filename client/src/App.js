import './App.css';
import Main from "./pages/Main";
import { useState, createContext } from 'react';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
