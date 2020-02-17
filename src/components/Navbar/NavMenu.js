import React, {useContext} from 'react';
import {NavbarContext} from './Navbar';
import {NavLink} from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = () => {
  const {state} = useContext(NavbarContext)

  return (
    <nav id='menu' style={{display: !state.menuOpen && 'none' }}>
      <ul>
        <NavLink to='/' className='navLink' activeClassName='navLink_active'>About Me</NavLink>
        <NavLink to='/projects' className='navLink' activeClassName='navLink_active'>Projects</NavLink>
        <NavLink to='/contact' className='navLink' activeClassName='navLink_active'>Contact</NavLink>
      </ul>
    </nav>
  );
}

export default NavMenu;