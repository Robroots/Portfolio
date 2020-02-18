import React, {useReducer} from 'react';
import Hamburger from './Hamburger/Hamburger';
import NavMenu from './NavMenu/NavMenu';
import reducer from './context/reducers';
import {initialState} from './context/initialState';
import './Navbar.scss';

export const NavbarContext = React.createContext();

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavbarContext.Provider value={{ state, dispatch }}>
      <section className='navbar'>
        <Hamburger />
        <NavMenu />
      </section>
    </NavbarContext.Provider>
  );
}

export default Navbar;