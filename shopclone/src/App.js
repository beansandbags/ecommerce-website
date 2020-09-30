import React, {Component} from 'react';
import Home from './components/home'
import Tea from './components/tea'
import Coffee from './components/coffee'
import Chocolate from './components/chocolate'
import Accessories from './components/accessories'
import Account from './components/account'
import Navbar from './components/navbar'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/tea' component={Tea} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/chocolate' component={Chocolate} />
          <Route path='/accessories' component={Accessories} />
          <Route path='/account' component={Account} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
