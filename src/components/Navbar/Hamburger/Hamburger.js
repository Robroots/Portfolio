import React, {useContext} from 'react';
import {NavbarContext} from '../Navbar';
import './Hamburger.scss';

const Hamburger = () => {
  const { state, dispatch } = useContext(NavbarContext)
  const menuOpen = (newValue) => {
    dispatch({type: 'MENU_TOGGLE', data: newValue})
  }

  return (
    <button onClick={() => menuOpen(!state.menuOpen)} 
            className={`hamburger hamburger--elastic${state.menuOpen ? ' is-active' : ''}`} 
            type='button'>
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
}

export default Hamburger;