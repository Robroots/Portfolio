import * as actions from './actions'

export default function reducer ( state, action ) {
  switch( action.type ){
    case actions.MENU_TOGGLE:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }

      default:
        return state;
  }
}