import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'

const userApi = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

const productApi = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};
 
class cartScreen extends Component {

    state = {
        cartProductID: [],
        cartProductData: []
        
    }
    constructor() {
        super();
        
        userApi.get('/', config)
            .then(res => {
                this.setState( {cartProductID: res.data.cart})
                
            })
            .then(res => {
                var i;
                for(i = 0; i < this.state.cartProductID.length; i++) {
                    productApi.get('/' + this.state.cartProductID[i])
                        .then(res => {
                            this.setState(prevState => ({
                                cartProductData: [...prevState.cartProductData, res.data]
                            }))
                            
                        })
                        .catch(err => console.error(err))
                }
            })

            .catch(err => console.error(err));        
        
    }

    

    render() {

        
        return (
                <div>

                <h3 className="cart-items">Shopping Cart</h3>
                <div  className="cart-details">
                    {
                        this.state.cartProductData.map(product =>
                            <li>
                                <div className="cart-product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={"http://localhost:5000/" + product.productImage} alt="" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                        <div className="product-price">Rs {product.price}</div>
                                        <button> Delete </button>
                                </div>
                            </li>
                        )
                    }
                </div>
                <form className="cart-checkout">
                        <h4 className="done">Checkout</h4>
                        <p className="done1">Ready to get these beverages delivered?</p>
                        <a href="/message">Buy These!</a>
                        <p className="done2"> Oh, you're thirsty for even more? </p>
                        <a href="/">Shop More!</a>
                    </form>
            </div>
        )
    }

}

export default cartScreen