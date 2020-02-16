import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <NavLink to='/'>About Me</NavLink>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;