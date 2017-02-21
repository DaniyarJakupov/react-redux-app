import React, {Component} from 'react';

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
    alert(`Saving ${this.state.project.title}`);
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

export default ProjectsPage;
