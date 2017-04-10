import projectApi from '../api/mockProjectApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusAction';

export const LOAD_PROJECTS_SUCCESS = 'LOAD_PROJECTS_SUCCESS';
export const UPDATE_PROJECTS_SUCCESS = 'UPDATE_PROJECTS_SUCCESS';
export const CREATE_PROJECTS_SUCCESS = 'CREATE_PROJECTS_SUCCESS';

export function loadProjectsSuccess(projects){
  return {
    type: LOAD_PROJECTS_SUCCESS,
    projects
  };
}

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

// Thunk function for async api calls
export function loadProjects(){
  return function(dispatch){
    dispatch(beginAjaxCall());
    //getAllProjects will return promise which contains array of objects
    return projectApi.getAllProjects().then((projects) => {
      dispatch(loadProjectsSuccess(projects));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveProject(project){
  //getState - optional param, if you need access to redux store
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    return projectApi.saveProject(project).then((project)=>{
      project.id ? dispatch(updateProjectSuccess(project)) : dispatch(createProjectSuccess(project));
    }).catch((error)=>{
      dispatch(ajaxCallError(error));
      throw(error);
    });
  };
}
