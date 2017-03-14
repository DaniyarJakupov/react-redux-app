// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {LOAD_AUTHOR_SUCCESS} from '../actions/authorAction';

export default function authorReducer(state = [], action){
  switch (action.type){
    case LOAD_AUTHOR_SUCCESS:
      return action.authors; // project which were passed in on the loadProjectsAction
    default:
      return state;
  }
}
