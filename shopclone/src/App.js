import React, {Component, Link} from 'react';
import Home from './components/home'
import Tea from './components/tea'
import Coffee from './components/coffee'
import Chocolate from './components/chocolate'
import Account from './components/account'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Products from './components/products'
import ProductScreen from './components/productscreen'
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/product/:id' component={ProductScreen}/>
          <Route path='/tea' component={Tea} />
          <Route path='/coffee' component={Coffee} />
          <Route path='/chocolate' component={Chocolate} />
          <Route path='/account' component={Account} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
