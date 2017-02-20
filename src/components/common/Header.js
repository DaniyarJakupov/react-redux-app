import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-left">
          <li><IndexLink to="/" activeClassName="active" className="links">Home</IndexLink></li>
          <li><Link to="/projects" activeClassName="active" className="links">Projects</Link></li>
          <li><Link to="/about" activeClassName="active" className="links">About</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
