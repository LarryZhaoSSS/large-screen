import './App.scss';
import {HashRouter,Route,Switch} from "react-router-dom";
import React from 'react';
import {Home} from "./pages/Home";
import './shared/style.scss'
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
