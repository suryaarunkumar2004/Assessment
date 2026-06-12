import React from 'react';
import ToggleButton from '../ToggleButton/ToggleButton';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Welcome to Theme Dashboard</h1>
      <ToggleButton />
    </header>
  );
};

export default Header;