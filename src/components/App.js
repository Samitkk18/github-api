import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Compare from './Compare'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Nav from './Nav'
import Search from './Search'

class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/compare' component={Compare} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
