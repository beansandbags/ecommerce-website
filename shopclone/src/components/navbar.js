import React, {Component} from 'react';
import Logo from '../shopclone.png'
import Signin from '../signin.png'
import M from 'materialize-css'
import './navbarstyle.css'
import axios from 'axios'
import Search from './search'
 
const api = axios.create({
    baseURL: 'http://localhost:5000/profile'
})
 
const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};
 
 
class navbar extends Component {
    state = {
        profileData: {},
        userExists: {
            type: Boolean
        }
    }
 
    constructor() {
        super();
        api.get('/', config)
            .then(res => {
                if(res.data){
                    this.setState({userExists: true})
                } else {
                    this.setState({userExists: false})
                }
                this.setState( {profileData: res.data})
            })
            .catch(err => console.error(err))
    }
 
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
        var cartNum = 0;
        if(this.state.userExists){
            if(this.state.profileData.cart == null){
                cartNum = 0
            } else {
                cartNum = this.state.profileData.cart
            }
        } else {
            cartNum = 0
        }
        const image = this.state.profileData.photo;
 

        if(this.state.userExists){
            var rightNavBar =                     <ul className='right'>
            <a  href="/cart">
                <li>{cartNum.length}</li>
                <li><i className="material-icons">shopping_cart</i></li>
            </a>
            <li><a href="/cart" className='cart'></a></li>
            <li><a href="/cart" className='cart'></a></li>
            <li><a href="/cart" className='cart'></a></li>
            <li><a className='dropdown-trigger' href='' data-target='dropdown1'>
                <img className="Signin brand-logo right" src={image}/> 
            </a></li>
        </ul>;
        } else {
            var rightNavBar = <ul className='right'><a  href="/cart">
                <li>{cartNum.length}</li>
                <li><i className="material-icons">shopping_cart</i></li>
            </a>  
            <li><a href='http://localhost:5000/auth/google'><i className="material-icons accountBox">account_box</i></a></li><li><a href="/cart" className='cart'></a></li>
            <li><a href="/cart" className='cart'></a></li></ul>;
        }

        return (
            <nav>
                <div className="nav-wrapper navbar">
 
 
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>      
 
                    <a href="/" data-target="mobile-demo" className="sidenav-trigger">
                        <img className="Mainlogo" src={Logo}/>
                    </a>
 
                    {rightNavBar}
 
                    
 
                    
                    <ul className="mainnav left hide-on-med-and-down">
                        <li><a href="/"><img className="center brand-logo Mainlogo" src={Logo}/></a></li>
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
                <li><a href="http://localhost:5000/auth/logout">Log Out</a></li>
                <li className="divider" tabindex="-1"></li>
            </ul>
 
        </nav>
    
        )
    }
}
 
 
 
export default navbar
