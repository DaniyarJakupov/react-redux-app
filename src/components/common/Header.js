import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
  return(
    <nav>
      <div>
        <IndexLink to="/" activeClassName="active" className="links">Home</IndexLink>
        {" | "}
        <Link to="/projects" activeClassName="active" className="links">Projects</Link>
        {" | "}
        <Link to="/about" activeClassName="active" className="links">About</Link>
      </div>
    </nav>
  );
};

export default Header;
