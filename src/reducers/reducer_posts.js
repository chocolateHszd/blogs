import {FETCH_POSTS, FETCH_POST} from '../actions/index';

const INITIAL_STATE = {all:  [], post: null};

export default function( state = INITIAL_STATE, action) {
  switch(action.type){
    case FETCH_POSTS:
      // should always return a new state
      return { ...state, all:action.payload.data};
    case FETCH_POST:
      // should always return a new state
    return { ...state, post:action.payload.data};
    default:
      return state;
  }
}
