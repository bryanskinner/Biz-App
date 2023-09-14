import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ user, logout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Biz-App</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Listings</Link></li>
          <li><Link to="/addlisting">Add</Link></li>
          {user ? (
            <li><button onClick={logout}>Logout</button></li>
          ) : (
            <li><Link to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
