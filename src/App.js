import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

function App() {
  return (
      <> 
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/t&c" component={TermsAndConditions}/>
        <Route exact path="/privacypolicy" component={PrivacyPolicy}/>
      </Switch>
      </BrowserRouter>
      </>
  )
}

export default App;
