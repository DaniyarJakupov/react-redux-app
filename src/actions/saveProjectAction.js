import projectApi from '../api/mockProjectApi';

export const UPDATE_PROJECTS_SUCCESS = 'UPDATE_PROJECTS_SUCCESS';
export const CREATE_PROJECTS_SUCCESS = 'CREATE_PROJECTS_SUCCESS';

export function updateProjectSuccess(project){
  return {
    type: UPDATE_PROJECTS_SUCCESS,
    project
  };
}

export function createProjectSuccess(project){
  return {
    type: CREATE_PROJECTS_SUCCESS,
    project
  };
}

// Thunk function
export function saveProject(project){
  //getState - optional param, if you need access to redux store
  return function(dispatch, getState){
    return projectApi.saveProject(project).then((project)=>{
      project.id ? dispatch(updateProjectSuccess(project)) : dispatch(createProjectSuccess(project));
    }).catch((error)=>{
      throw(error);
    });
  };
}
