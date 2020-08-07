import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing';
import HereForImprovement from './Components/HereForImprovement';
import HereForSchool from './Components/HereForSchool';
import HereForCuriosity from './Components/HereForCuriosity';
import SocialExperiment from './Components/SocialExperiment';
import CreateAccount from './Components/CreateAccount';
import Introduction from './Components/Introduction';
import Legal from './Components/Legal';
import NameEntry from './Components/NameEntry';
import Feedback from './Components/Feedback';
import Login from './Components/Login';

export default (
  <Switch>
    <Route exact path = '/' component = {Landing}/>
    <Route path = '/improvement' component = {HereForImprovement}/>
    <Route path = '/school' component = {HereForSchool}/>
    <Route path = '/curiosity' component = {HereForCuriosity}/>
    <Route path = '/create-account' component = {CreateAccount}/>
    <Route path = '/introduction' component = {Introduction}/>
    <Route path = '/legal' component = {Legal}/>
    <Route path = '/name-entry' component = {NameEntry}/>
    <Route path = '/feedback' component = {Feedback}/>
    <Route path = '/social-experiment' component = {SocialExperiment}/>
    <Route path = '/login' component = {Login}/>
  </Switch>
)
