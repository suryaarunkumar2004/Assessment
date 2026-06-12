import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './Content.css';

const Content = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="content">
      <h2>{isDarkMode ? 'Dark Mode is active' : 'Light Mode is active'}</h2>
      <p>
        This is the main content area. The theme is currently in{' '}
        <strong>{isDarkMode ? 'dark' : 'light'}</strong> mode.
      </p>
    </div>
  );
};

export default Content;