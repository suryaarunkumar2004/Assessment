import React from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';

const AppContent = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Header />
      <Dashboard />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;