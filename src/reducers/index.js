import { combineReducers } from 'redux';
import ProjectReducer from './projectReducer';
import AuthorReducer from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  projects: ProjectReducer,
  authors: AuthorReducer,
  ajaxCallsInProgress: ajaxCallsInProgress
});

export default rootReducer;
