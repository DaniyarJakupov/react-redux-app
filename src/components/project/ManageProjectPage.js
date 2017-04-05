import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectAction from '../../actions/projectAction';
import ProjectForm from './ProjectForm';

class ManageProjectPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      project: Object.assign({}, this.props.project),
      errors: {}
    };
    this.updateProjectState = this.updateProjectState.bind(this);
    this.saveProject = this.saveProject.bind(this);
  }
  // Lifecycle func; will run every time props have changed
  componentWillReceiveProps(nextProps) {
    if(this.props.project.id !== nextProps.project.id) {
      // Necessary to populate form when existing project is loaded directly
      this.setState(
        {project: Object.assign({}, nextProps.project)}
      );
    }
  }

  updateProjectState(event){
    const field = event.target.name;
    let project = this.state.project;
    project[field] = event.target.value;
    return this.setState({project: project});
  }

  saveProject(event){
    event.preventDefault();
    this.props.actions.saveProject(this.state.project);
    this.context.router.push('/projects');
  }

  render() {
    return (
      <div>
        <ProjectForm
          project={this.state.project}
          errors={this.state.errors}
          allAuthors={this.props.authors}
          onChange={this.updateProjectState}
          onSave={this.saveProject}
        />
      </div>
    );
  }
}

// ======= Prop Type validation =======
ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// Pull in react router context so router is available at this.context.router
ManageProjectPage.contextTypes = {
  router: PropTypes.object.isRequired
};
// ======= Redux Part =========
function getProjectById(projects, id){
  const project = projects.filter(project => project.id === id);
  if(project !== undefined) return project[0]; // since filter returns an array, we need the first element
  return null;
}

function mapStateToProps( state, ownProps ) {
  const projectId = ownProps.params.id; // from the path '/project/:id'
  let project = {id:'', watchHref:'', title: '', authorId:'', category: ''};
  if(projectId !== undefined && state.projects.length > 0){
    project = getProjectById(state.projects, projectId);
  }
  const authorsFormattedForDropdown = state.authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
  // state from redux store
  return {
    project: project,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
