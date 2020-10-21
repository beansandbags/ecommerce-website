import React, {Component} from 'react';
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Banner1 from '../banners/Banner-1.jpeg'
import Banner2 from '../banners/Banner-2.jpeg'
import Banner3 from '../banners/Banner-3.jpeg'
import Search from './search'

const api = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

const userApi = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};

class home extends Component {
    state = {
        productData: [],
        cartProductID:[],
        loggedInUser: ""
    }
    constructor() {
        super();
        api.get('/')
            .then(res => {
                this.setState( {productData: res.data})
            })
            .catch(err => console.error(err))

        userApi.get('/', config)
            .then(res => {
                this.setState( {cartProductID: res.data.cart, loggedInUser: res.data._id})     
                if(this.state.loggedInUser != null){
                    this.setState({userExists: true})
                } else {
                    this.setState({userExists: false})
                }
            })
            .catch(err => console.error(err))
    }

    async updateLocalCart(newID) {
        this.setState(prevState => ({
            cartProductID: [...prevState.cartProductID, newID]
        }))
    }
    
    addToCart(newID, prodName) {  
        if(this.state.userExists === false){
            alert("You are not logged in. Redirecting you to Login Page")
            window.location = "http://localhost:5000/auth/google"
        } else {  
        this.updateLocalCart(newID)
            .then(res => {
                userApi.put('/' + this.state.loggedInUser, {cart: this.state.cartProductID})
                    .then(res => {
                        alert(prodName + " has been added to cart")
                    })
            })
            .catch(err => console.error(err));
       }
    }

   componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                shift: 50,
                numVisible: 3
            });
          });
    }

    render() {
        return (
            <div className="grid-container">
            <div className="grid-container"> <Search />        
            <main className="main">
            <div class="carousel center">
                            <a class="carousel-item" href="http://localhost:3000/product/5f88bac602d2922a3c72c355"><img src={Banner1} /></a>
                            <a class="carousel-item" href="http://localhost:3000/product/5f88bac602d2922a3c72c35e"><img src={Banner2} /></a>
                            <a class="carousel-item" href="http://localhost:3000/product/5f88baf502d2922a3c72c37f"><img src={Banner3} /></a>
                        </div>
                <div className="content">
                    <ul className="products">
                        {
                            this.state.productData.map(product =>
                                <li><div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={"http://localhost:5000/" + product.productImage} alt="" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">Rs {product.price}</div>
                                    <div className="product-rating">{product.avgRating} Stars ({product.comments.length} Reviews)</div>
                                    <button onClick={this.addToCart.bind(this, product._id, product.name)} className="quantity-selector"> Add to Cart </button>
                                </div></li>
                            )
                        }
                    </ul>
                </div>
            </main>
        </div>
        </div>      
        
            )
    }
}

export default home