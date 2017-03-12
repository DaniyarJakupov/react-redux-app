// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {CREATE_PROJECT} from '../actions/createProjectAction';
import {LOAD_PROJECTS_SUCCESS} from '../actions/loadProjectsAction';

export default function projectReducer(state = [], action){
  switch (action.type){
    case CREATE_PROJECT:
      debugger;
      return [...state, Object.assign({}, action.payload)]; //ES6
    case LOAD_PROJECTS_SUCCESS:
      return action.projects; // projects which were passed in on the loadProjectsAction
    default:
      return state;
  }
}
