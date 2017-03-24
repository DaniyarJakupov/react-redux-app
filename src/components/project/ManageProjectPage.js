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

  updateProjectState(event){
    const field = event.target.name;
    let project = this.state.project;
    project[field] = event.target.value;
    return this.setState({project: project});
  }

  saveProject(event){
    event.preventDefault();
    this.props.actions.saveProject(this.state.project);
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

// ======= Redux Part =========
function mapStateToProps(state, ownProps) {
  let project = {id:'', watchHref:'', title: '', authorId:'', category: ''};
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
