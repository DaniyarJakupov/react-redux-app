export const CREATE_PROJECT = 'CREATE_PROJECT';

export function createProject(project){
  debugger;
  return {
    type: CREATE_PROJECT,
    payload: project
  };
}
