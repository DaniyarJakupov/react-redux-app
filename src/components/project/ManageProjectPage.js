import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as projectActions from '../../actions/loadProjectsAction';

class ManageProjectPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <h1>Manage Project</h1>
    );
  }
}

// ======= Prop Type validation =======
ManageProjectPage.propTypes = {
  //prop: PropTypes.string.isRequired
};

// ======= Redux Part =========
function mapStateToProps(state, ownProps) {
  // state from redux store
  return {
    state: state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(projectActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageProjectPage);
