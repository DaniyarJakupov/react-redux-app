import projectApi from '../api/mockProjectApi';

export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';

export function loadProjectsSuccess(projects){
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects
  };
}

// Thunk function for async api calls
export function loadProjects(){
  return function(dispatch){
    //getAllProjects will return promise which contains array of objects
    return projectApi.getAllProjects().then((projects) => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}
