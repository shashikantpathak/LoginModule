import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link to="/"><p className='userprofile'>UserProfile</p></Link>

    <nav>
      <Link to="/helloworld"><p className='codehome'>CodeChallenge</p></Link>
    </nav>

    <hr />
  </header>
);

export default Header;
