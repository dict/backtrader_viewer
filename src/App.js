import React from 'react';
import {Route} from "react-router-dom";
import Page from "./component/Page";
import {Switch} from "react-router-dom";
import Main from "./component/Main";

function App() {
  function handleClick(event) {

  }

  return (
    <Switch>
      <Route exact path="/page" component={Page}/>>
      <Route path="/" component={Main} />
    </Switch>

  );
}

export default App;

