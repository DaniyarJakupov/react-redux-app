import { combineReducers } from 'redux';
import ProjectReducer from './projectReducer';
import AuthorReducer from './authorReducer';

const rootReducer = combineReducers({
  projects: ProjectReducer,
  authors: AuthorReducer
});

export default rootReducer;
