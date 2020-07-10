import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Landing from './Components/Landing/Landing';
import HereForImprovement from './Components/Landing/HereForImprovement';
import HereForSchool from './Components/Landing/HereForSchool';
import HereForCuriosity from './Components/Landing/HereForCuriosity';
import SocialExperiment from './Components/Landing/SocialExperiment';
import CreateAccount from './Components/Authorization/CreateAccount';
import Introduction from './Components/Authorization/Introduction';
import Legal from './Components/Legal';
import NameEntry from './Components/Better/NameEntry';
import Feedback from './Components/Better/Feedback';

export default (
  <Switch>
    <Route exact path = '/' component = {Landing}/>
    <Route path = '/landing/improvement' component = {HereForImprovement}/>
    <Route path = '/landing/school' component = {HereForSchool}/>
    <Route path = '/landing/curiosity' component = {HereForCuriosity}/>
    <Route path = '/create-account' component = {CreateAccount}/>
    <Route path = '/introduction' component = {Introduction}/>
    <Route path = '/legal' component = {Legal}/>
    <Route path = '/name-entry' component = {NameEntry}/>
    <Route path = '/feedback' component = {Feedback}/>
    <Route path = '/social-experiment' component = {SocialExperiment}/>
  </Switch>
)
