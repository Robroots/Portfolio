import React, {useContext} from 'react';
import {NavbarContext} from '../Navbar';
import './Hamburger.scss';
import PropTypes from 'prop-types';

const Hamburger = (props) => {
  const { dispatch } = useContext(NavbarContext)
  const menuOpen = (newValue) => {
    dispatch({type: 'MENU_TOGGLE', data: newValue})
  }

  return (
    <button onClick={() => menuOpen(!props.menuOpen)} 
            className={`hamburger hamburger--elastic${props.menuOpen ? ' is-active' : ''}`} 
            type='button'>
      <span className='hamburger-box'>
        <span className='hamburger-inner'></span>
      </span>
    </button>
  );
}

Hamburger.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
}

export default Hamburger;