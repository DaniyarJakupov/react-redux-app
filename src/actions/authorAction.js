import authorApi from '../api/mockAuthorApi';

export const LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS';

export function loadAuthorSuccess(authors){
  return {
    type: LOAD_AUTHOR_SUCCESS,
    authors
  }
}

// Thunk function for async api calls
export function loadAuthor(){
  return function(dispatch){
    //getAllAuthors will return promise which contains array of objects
    return authorApi.getAllAuthors().then((author) => {
      dispatch(loadAuthorSuccess(author));
    }).catch(error => {
      throw(error);
    });
  }
}
