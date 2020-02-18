import React, {useContext} from 'react';
import {NavbarContext} from './Navbar';
import {NavLink} from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = () => {
  const {state, dispatch} = useContext(NavbarContext);
  const menuOpen = (newValue) => {
    dispatch({type: 'MENU_TOGGLE', data: newValue})
  }

  const menuIsVisible = state.menuOpen ? 'menu' : 'menu--hidden';
  const navLinks = [
    {
      text: 'About Me',
      path: '/'
    },
    {
      text: 'Projects',
      path: '/projects'
    },
    {
      text: 'Contact',
      path: '/contact'
    }
  ]

  return (
    <nav className={menuIsVisible}>
      <ul className='menu__list'>
        {navLinks.map(link => 
          <NavLink key={link.path}
                   to={link.path}
                   className='menu__link'
                   onClick={()=> menuOpen(!state.menuOpen)}
          >{link.text}
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;