import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {

  render(){
    return(
      <header className="jumbotron">
        <div className="container">
          <h2>JavaScript Projects Catalog</h2>
          <p>List of web apps build with various js tools</p>
          <Link to="projects" className="btn btn-primary btn-lg">See the list</Link>
        </div>
      </header>
    );
  }
}

export default HomePage;
