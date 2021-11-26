import React from 'react'
// import {Route} from 'react-router-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import './HomePage';
import HomePage from './HomePage';
import PrivacyPolicy from './PrivacyPolicy';
//import { BrowserRouter } from 'react-router-dom';
import TermsAndConditions from './TermsAndConditions';
// import HomeSlick from './HomeSlick';



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
