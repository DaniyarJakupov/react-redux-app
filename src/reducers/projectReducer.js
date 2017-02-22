// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {CREATE_PROJECT} from './../actions/projectAction';

export default function projectReducer(state = [], action){
  switch (action.type){
    case CREATE_PROJECT:
      return [...state, Object.assign({}, action.payload)]; //ES6
    default:
      return state;
  }
}
