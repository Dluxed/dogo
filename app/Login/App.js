import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
       <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
  }
  
  export default App;