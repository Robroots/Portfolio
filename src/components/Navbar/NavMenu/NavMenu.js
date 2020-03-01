import React, {useContext} from 'react';
import {NavbarContext} from '../Navbar';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavMenu.scss';

const NavMenu = (props) => {
  const { dispatch } = useContext(NavbarContext);
  const menuOpen = (newValue) => {
    dispatch({type: 'MENU_TOGGLE', data: newValue})
  }

  return (
    <nav className={!props.menuOpen ? 'menu_hidden' : 'menu'}>
      <ul className='menu__list'>
        {props.navLinks.map(link => 
          <NavLink key={link.path}
                   to={link.path}
                   exact={link.exact}
                   className='menu__link'
                   activeClassName='menu__link_active'
                   onClick={()=> menuOpen(!props.menuOpen)}
          >{link.text}
          </NavLink>
        )}
      </ul>
    </nav>
  );
}

NavMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  navLinks: PropTypes.array.isRequired
}

export default NavMenu;