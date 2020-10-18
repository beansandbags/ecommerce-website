import React, {Component} from 'react';
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
import axios from 'axios'



const api = axios.create({
    baseURL: 'http://localhost:5000/api/products/coffees'
})

const userApi = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

function updateCart() {
    console.log('PUT/PATCH Request');
}

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};

class coffee extends Component {
    state = {
        coffeeData: [],
        cartProductID:[],
        loggedInUser: ""
    }
    constructor() {
        super();
        
        api.get('/')
            .then(res => {
                this.setState( {coffeeData: res.data})
            })
            .catch(err => console.error(err))

        userApi.get('/', config)
            .then(res => {
                this.setState( {cartProductID: res.data.cart, loggedInUser: res.data._id})     
                
            })
            .catch(err => console.error(err))



    }

    
    async updateLocalCart(newID) {
        this.setState(prevState => ({
            cartProductID: [...prevState.cartProductID, newID]
        }))
    }
    
    addToCart(newID) {
        
        this.updateLocalCart(newID)
            .then(res => {
                userApi.put('/' + this.state.loggedInUser, {cart: this.state.cartProductID});                
            })
            .catch(err => console.error(err));
        

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
                <h3 className="cart-items">Coffee</h3>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        {
                            this.state.coffeeData.map(product =>
                                <li><div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={"http://localhost:5000/" + product.productImage} alt="" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">Rs {product.price}</div>
                                    <div className="product-rating">{5} Stars ({5} Reviews)</div>
                                    <button onClick={this.addToCart.bind(this, product._id)} className="quantity-selector"> Add to Cart </button>
                                </div></li>
                            )
                        }
                    </ul>
                </div>
            </main>
        </div>      
        
            )
    }

    
}

export default coffee

