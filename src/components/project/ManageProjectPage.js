import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/loadProjectsAction';
import ProjectForm from './ProjectForm';

class ManageProjectPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      project: Object.assign({}, this.props.project),
      errors: {}
    };
  }

  render() {
    return (
      <div>
        <ProjectForm
          project={this.state.project}
          errors={this.state.errors}
          allAuthors={this.props.authors}
        />
      </div>
    );
  }
}

// ======= Prop Type validation =======
ManageProjectPage.propTypes = {
  project: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired
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
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
