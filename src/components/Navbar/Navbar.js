import React, {useReducer} from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavMenu from './NavMenu/NavMenu';
import reducer from './context/reducers';
import {initialState} from './context/initialState';
import './Navbar.scss';

export const NavbarContext = React.createContext();

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {navLinks, menuOpen} = state

  return (
    <NavbarContext.Provider value={{ dispatch }}>
      <section className='navbar'>
        <Hamburger menuOpen={menuOpen}/>
        <NavMenu menuOpen={menuOpen} navLinks={navLinks}/>
      </section>
    </NavbarContext.Provider>
  );
}

export default Navbar;