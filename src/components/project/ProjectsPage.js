import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as loadProjectsAction from '../../actions/projectAction';
import {bindActionCreators} from 'redux';
import ProjectList from './ProjectList';
import {browserHistory} from 'react-router';

class ProjectsPage extends Component{
  constructor(props, context){
    super(props, context);
    // Bind functions to this
    this.redirectToAddProjectPage = this.redirectToAddProjectPage.bind(this);
  }

  // // === Child functions ===
  // onTitleChange(event) {
  //   const project = this.state.project;
  //   project.title = event.target.value;
  //   this.setState({
  //     project: project
  //   });
  // }

  // onClickSave() {
  //   //this.props.actions.createProject(this.state.project);
  // }

  redirectToAddProjectPage(){
    browserHistory.push('/project');
  }

  projectRow(project, index){
    return <div key={index}>{project.title}</div>;
  }
  // === Render ===
  render(){
    const {projects} = this.props;
    return(
      <div>
        <h1>Projects</h1>
        <input
          type="submit"
          value="Add Project"
          onClick={this.redirectToAddProjectPage}
          className="btn btn-info"
        />
        <ProjectList projects={projects} />
      </div>
    );
  }
}

// === Prop Type validation ===
ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

// === Redux Part ====
function mapStateToProps(state, ownProps){
  // state from redux store
  return {
    projects: state.projects // project property is coming from rootReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loadProjectsAction, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
