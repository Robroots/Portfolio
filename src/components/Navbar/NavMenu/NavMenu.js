import React, {useContext} from 'react';
import {NavbarContext} from '../Navbar';
import {NavLink} from 'react-router-dom';
import './NavMenu.scss';

const NavMenu = () => {
  const {state, dispatch} = useContext(NavbarContext);
  const menuOpen = (newValue) => {
    dispatch({type: 'MENU_TOGGLE', data: newValue})
  }

  return (
    <nav className={!state.menuOpen ? 'menu_hidden' : 'menu'}>
      <ul className='menu__list'>
        {state.navLinks.map(link => 
          <NavLink key={link.path}
                   to={link.path}
                   exact={link.exact}
                   className='menu__link'
                   activeClassName='menu__link_active'
                   onClick={()=> menuOpen(!state.menuOpen)}
          >{link.text}
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

export default NavMenu;