import authorApi from '../api/mockAuthorApi';
import {beginAjaxCall} from './ajaxStatusAction';

export const LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS';

export function loadAuthorSuccess(authors){
  return {
    type: LOAD_AUTHOR_SUCCESS,
    authors
  };
}

// Thunk function for async api calls
export function loadAuthors(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    //getAllAuthors will return promise which contains array of objects
    return authorApi.getAllAuthors().then((author) => {
      dispatch(loadAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  };
}
