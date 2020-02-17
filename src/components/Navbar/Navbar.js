import React, {useReducer} from 'react';
import Hamburger from './Hamburger';
import NavMenu from './NavMenu';
import reducer from './reducers'
import './Navbar.scss';

export const NavbarContext = React.createContext();

const initialState = {
  menuOpen: false
}

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <NavbarContext.Provider value={{state, dispatch}}>
      <section className='navBar'>
        <Hamburger />
        <NavMenu />
      </section>
    </NavbarContext.Provider>
  );
}

export default Navbar;