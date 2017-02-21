import React, {Component} from 'react';
import {Link} from 'react-router';

class HomePage extends Component {
  render(){
    return(
      <header className="jumbotron">
        <div className="container">
          <h1>React Projects Catalog</h1>
          <p>List of single-page web apps build with React</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
        </div>
      </header>
    );
  }
}

export default HomePage;
