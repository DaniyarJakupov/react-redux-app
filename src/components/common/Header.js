import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  return(
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <ul className="nav navbar-nav navbar-left">
          <li><IndexLink to="/" activeClassName="active" className="links">Home</IndexLink></li>
          <li><Link to="/projects" activeClassName="active" className="links">Projects</Link></li>
          <li><Link to="/about" activeClassName="active" className="links">About</Link></li>
          {loading && <LoadingDots interval={100} dots={15} />}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
