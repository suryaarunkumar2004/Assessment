import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ToggleButton.css';

const ToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      className={`toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ToggleButton;