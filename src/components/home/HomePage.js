import React, {Component} from 'react';
import Link from 'react-router';

class Home extends Component {
  render(){
    return(
      <div className="jumbotron">
        <h1>Admin Panel</h1>
        <p>React + Redux in ES6 for single-page web app</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
      </div>
    )
  }
}

export default Home;
