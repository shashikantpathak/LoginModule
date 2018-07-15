import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import LandingPage from './landingpage';
import ForCompanies from './forcompanies';
import SignUp from './signup';
import LogIn from './login';
import ForDevelopers from './fordevelopers';
import CreateSubmission from './createsubmission';

import Extra from './extra';


const Main = () => (
  <Switch>
    {/* <Route exact path="/" component={LandingPage} /> */}
    <Route path="/forcompanies" component={ForCompanies} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={LogIn} />
    <Route path="/fordevelopers" component={ForDevelopers} />
    <Route path="/createsubmission" component={CreateSubmission} />
    
    {/* <Route path="/extra" component={Extra} /> */}
    
   
  </Switch>
)

export default Main;