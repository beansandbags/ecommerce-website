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

class wishlist extends Component {
    state = {
        wishlistProductID: [],
        wishlistProductData: []
        
    }
    constructor() {
        super();
        
        userApi.get('/', config)
            .then(res => {
                
                this.setState( {wishlistProductID: res.data.wishlist})
                
            })
            .then(res => {
                var i;
                for(i = 0; i < this.state.wishlistProductID.length; i++) {
                    productApi.get('/' + this.state.wishlistProductID[i])
                        .then(res => {
                            this.setState(prevState => ({
                                wishlistProductData: [...prevState.wishlistProductData, res.data]
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

                <h3 className="cart-items">Wish List</h3>
                <div  className="cart-details">
                    {
                        this.state.wishlistProductData.map(product =>
                            <li>
                                <div className="cart-product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={"http://localhost:5000/" + product.productImage} alt="" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                        <div className="product-price">Rs {product.price}</div>
                                        <button className="quantity-selector"> Add to Cart </button>
                                        <button> Remove </button>
                                        
                                </div>
                            </li>
                        )
                    }
                </div>
            </div>
        )
    }

}

export default wishlist