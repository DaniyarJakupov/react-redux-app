// Reducer is a function() that takes previous state, the action being dispatch and
// returns the new state. Reducer has to be pure function.

import {LOAD_PROJECTS_SUCCESS} from '../actions/projectAction';
import {CREATE_PROJECTS_SUCCESS} from '../actions/projectAction';
import {UPDATE_PROJECTS_SUCCESS} from '../actions/projectAction';
import initialState from './initialState';

export default function projectReducer(state = initialState.projects, action){
  switch (action.type){
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
