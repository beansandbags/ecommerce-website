import React, {Component} from 'react';
import './navbarstyle.css'

class footer extends Component {

    render() {
        return (
            <footer className="page-footer footer">
              <div className="content">
            <div className="display-container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">BeansAndBags</h5>
                  <p className="grey-text text-lighten-4">A website to help you buy the perfect chocolate to compliment your drink! 
                  So, what are you waiting for? Get yourself some to keep you company during exam nights now!</p>
                </div>
                <div className="col l4 offset-l2 s12">
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="/">Home</a></li>
                    <li><a className="grey-text text-lighten-3" href="/tea">Tea</a></li>
                    <li><a className="grey-text text-lighten-3" href="/coffee">Coffee</a></li>
                    <li><a className="grey-text text-lighten-3" href="/chocolate">Chocolates</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="display-container">
              <a className="white-text" href="#">© All rights reserved</a>
              </div>
            </div>
            </div>
          </footer>
    
        )
    }
}



export default footer