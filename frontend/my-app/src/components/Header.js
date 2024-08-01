import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
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
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">{getTitle()}</Link>
        <nav className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-run">Add Run</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
