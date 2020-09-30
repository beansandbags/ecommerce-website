import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../shopclone.png'
import Signin from '../signin.png'
import M from 'materialize-css'
import './navbarstyle.css'

class navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
          });
        
          document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
          });
    }

    render() {
        return (
            <nav>
                <div class="nav-wrapper green darken-3">


                    <a href="#" data-target="mobile-demo" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                        <img className="Mainlogo" src={Logo}/>
                    </a>      

                    
                    <a class='right dropdown-trigger' href='' data-target='dropdown1'>
                        <img className="Signin brand-logo right" src={Signin}/>
                    </a>

                    <a class='right hide-on-med-and-down'>
                    <form>
                        <div class="input-field">
                            <input id="search" type="search" required/>
                            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                            <i class="material-icons">close</i>
                        </div>
                    </form>  
                    </a>

                    <ul class="left hide-on-med-and-down">
                        <li><a href="/"><img className="Mainlogo" src={Logo}/></a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="" class='dropdown-trigger' data-target='dropdown2'>Drinks</a></li>
                        <li><a href="/chocolate">Chocolate</a></li>
                        <li><a href="/accessories">Accessories</a></li>
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                        
                </div>

            <ul class="sidenav" id="mobile-demo">
                <li><a href="/">Home</a></li>
                <li><a href="/drinks">Drinks</a></li>
                <li><a href="/chocolate">Chocolate</a></li>
                <li><a href="/accessories">Accessories</a></li>
            </ul>

            <ul id='dropdown1' class='dropdown-content'>
                <li><a href="/account">Your Account</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">Your Order</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">Your Wishlist</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="#!">Orders and Returns</a></li>
                <li class="divider" tabindex="-1"></li>
            </ul>

            <ul id='dropdown2' class='dropdown-content'>
                <li><a href="/tea">Tea</a></li>
                <li class="divider" tabindex="-1"></li>
                <li><a href="/coffee">Coffee</a></li>
            </ul>

        </nav>
    
        )
    }
}



export default navbar