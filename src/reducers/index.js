import { combineReducers } from 'redux';
import ProjectReducer from './projectReducer';

const rootReducer = combineReducers({
  projects: ProjectReducer
});

export default rootReducer;
