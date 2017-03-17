// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {LOAD_PROJECTS_SUCCESS} from '../actions/loadProjectsAction';
import {CREATE_PROJECTS_SUCCESS} from '../actions/saveProjectAction';
import {UPDATE_PROJECTS_SUCCESS} from '../actions/saveProjectAction';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action){
  switch (action.type){
    // case CREATE_PROJECT:
    //   return [...state, Object.assign({}, action.payload)]; //ES6
    case LOAD_PROJECTS_SUCCESS:
      return action.projects; // project which were passed in on the loadProjectsAction
    case CREATE_PROJECTS_SUCCESS:
      return [... state, Object.assign({}, action.project)];
    case UPDATE_PROJECTS_SUCCESS:
      return [... state.filter(project => project.id !== action.project.id), Object.assign({}, action.project)];
    default:
      return state;
  }
}
