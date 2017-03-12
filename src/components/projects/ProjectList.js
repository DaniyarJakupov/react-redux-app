import React, {PropTypes} from 'react';
import ProjectListRow from './ProjectListRow';

const ProjectList = ({projects}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>GitHub</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      {projects.map(project =>
        <ProjectListRow key={project.id} project={project} />
      )}
      </tbody>
    </table>
  );
};

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectList;
