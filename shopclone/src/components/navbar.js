import React, {Component} from 'react';
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
                <div className="nav-wrapper navbar">


                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>      

                    <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                        <img className="Mainlogo" src={Logo}/>
                    </a>

                    <ul className='right'>
                        <li><a className="cart-number" href="/cart">1</a></li> {/*Axios Cart Number*/}
                        <li><a href="/cart" className='cart'>Cart</a></li>
                        <li><a href=""></a></li>
                        <li><a className='dropdown-trigger' href='' data-target='dropdown1'>
                        <img className="Signin brand-logo right" src={Signin}/> </a></li>
                    </ul>

                    

                    <a className='right hide-on-med-and-down'>
                    <form>
                        <div className="input-field">
                            <input id="search" type="search" placeholder="Search here" required/>
                            <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>  
                    </a>

                    <ul className="mainnav left hide-on-med-and-down">
                        <li><a href="/"><img className="Mainlogo" src={Logo}/></a></li>
                        <li><a href="/tea">Tea</a></li>
                        <li><a href="/coffee">Coffee</a></li>
                        
                        <li><a href=""></a></li>
                        <li><a href=""></a></li>
                    </ul>
                        
                </div>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="/tea">Tea</a></li>
                <li><a href="/coffee">Coffee</a></li>
                
            </ul>

            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="/account">Your Account</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="/wishlist">Your Wishlist</a></li>
                <li className="divider" tabindex="-1"></li>
                <li><a href="/history">Your Orders</a></li>
                <li className="divider" tabindex="-1"></li>
            </ul>

        </nav>
    
        )
    }
}



export default navbar