import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

interface NavbarProps {}

class Navbar extends Component<NavbarProps> {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Pokemon Home</Link>
          </li>
          <li>
            <Link to="/my">My Pokemon</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
