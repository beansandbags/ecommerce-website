import React, {Component} from 'react';
import Home from './components/home'
import Tea from './components/tea'
import Coffee from './components/coffee'
import Chocolate from './components/chocolate'
import Accessories from './components/accessories'
import Account from './components/account'
import Navbar from './components/navbar'
import Footer from './components/footer'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }
  
  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }
  
  componentWillMount() {
    this.callAPI();
  }
  
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
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}




export default App;
