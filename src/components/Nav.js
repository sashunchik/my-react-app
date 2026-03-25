import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/prepared" className="nav-link">Prepared</Link>
        </li>
        <li className="nav-item">
          <Link to="/available" className="nav-link">Available</Link>
        </li>
        <li className="nav-item">
          <Link to="/to-be-learnt" className="nav-link">To be learnt</Link>
        </li>
        <li className="nav-item">
          <Link to="/more-info" className="nav-link">More info</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
