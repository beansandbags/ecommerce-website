import React, {Component, Link} from 'react';
import Home from './components/home'
import Tea from './components/tea'
import Coffee from './components/coffee'
import Account from './components/account'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ProductScreen from './components/productscreen'
import signin from './components/login'
import signup from './components/signup'
import cart from './components/cartScreen'
import message from './components/message'
import wishlist from './components/wishlist'
import history from './components/history'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/tea' component={Tea} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/account' component={Account} />
          <Route path='/signin' component= {signin} />
          <Route path='/signup' component= {signup} />
          <Route path='/cart' component= {cart} />
          <Route path='/message' component= {message} />
          <Route path='/wishlist' component= {wishlist} />
          <Route path='/history' component= {history} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
