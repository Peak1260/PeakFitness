import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  // Define titles based on the current route
  const getTitle = () => {
    switch (location.pathname) {
      case '/add-run':
        return 'Add a New Run';
      case '/edit-run':
        return 'Edit Run';
      default:
        return 'Fitness Tracker';
    }
  };

  return (
    <header className="Header">
      <h1>{getTitle()}</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-run">Add Run</Link>
        <Link to="/edit-run">Edit Run</Link>
      </nav>
    </header>
  );
};

export default Header;
