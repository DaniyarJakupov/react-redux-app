import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as projectAction from '../../actions/projectAction';


class ProjectsPage extends Component{
  constructor(props){
    super(props);

    this.state = {
      project: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const project = this.state.project;
    project.title = event.target.value;
    this.setState({
      project: project
    });
  }

  onClickSave() {
    //connect automatically injects dispatch prop
    this.props.dispatch(projectAction.createProject(this.state.project));
  }

  render(){
    return(
      <div>
        <h1>Projects</h1>
        <h2>Add project</h2>
        <div className="myform">
          <div className="form-group">
            <input type="text" onChange={this.onTitleChange} value={this.state.project.title} className="form-control"/>
          </div>
          <div className="form-group">
            <input type="submit" value="Save" onClick={this.onClickSave} className="btn btn-info btn-block"/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  // state from redux store
  return {
    projects: state.projects // projects property is coming from rootReducer
  };
}

export default connect(mapStateToProps)(ProjectsPage);
