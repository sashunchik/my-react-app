import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="prepared.html" className="nav-link">Prepared</a>
        </li>
        <li className="nav-item">
          <a href="available.html" className="nav-link">Available</a>
        </li>
        <li className="nav-item">
          <a href="to-be-learnt.html" className="nav-link">To be learnt</a>
        </li>
        <li className="nav-item">
          <a href="more-info.html" className="nav-link">More info</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
