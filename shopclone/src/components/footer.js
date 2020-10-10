import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import M from 'materialize-css'
import insta from "../insta.png"
import linkedin from "../linkedin.png"
import ghub from "../github.png"
import './navbarstyle.css'

class footer extends Component {

    render() {
        return (
            <footer class="page-footer green darken-3">
            <div class="display-container">
              <div class="row">
                <div class="col l6 s12">
                  <h5 class="white-text">BeansAndBags</h5>
                  <p class="grey-text text-lighten-4">A website to help you buy the perfect chocolate to compliment your drink! 
                  So, what are you waiting for? Get yourself some to keep you company during exam nights now!</p>
                </div>
                <div class="col l4 offset-l2 s12">
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a class="grey-text text-lighten-3" href="/tea">Tea</a></li>
                    <li><a class="grey-text text-lighten-3" href="/coffee">Coffee</a></li>
                    <li><a class="grey-text text-lighten-3" href="/chocolate">Chocolates</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="footer-copyright">
              <div class="display-container">
              <a className="black-text" href="#">© 2020 Copyright Text</a>
              </div>
            </div>
          </footer>
    
        )
    }
}



export default footer