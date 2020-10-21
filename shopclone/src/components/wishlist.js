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
        wishlistProductData: [],
        cartProductID: [],
        loggedInUser: ""
        
    }
    constructor() {
        super();
        
        userApi.get('/', config)
            .then(res => {
                
                this.setState( {wishlistProductID: res.data.wishlist, cartProductID: res.data.cart, loggedInUser: res.data._id})
                
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
            this.removeFromWishlist = this.removeFromWishlist.bind(this);     
        
    }

    async localRemove(prodID) {
        var IDfound = 0;
        var idxToDelete = -1;
        for(var i = 0; i < this.state.wishlistProductID.length && !IDfound; i++) {
            if(this.state.wishlistProductID[i] == prodID) {
                idxToDelete = i;
                IDfound = 1;
            }
        }
        if(IDfound)
            this.state.wishlistProductID.splice(idxToDelete, 1);
        else 
            alert("ERROR ENCOUNTERED!")

    }

    async decrement(productWishlistCount) {
        return productWishlistCount - 1
    }
    removeFromWishlist(prodID, prodName, e) {  
        e.preventDefault()

        this.localRemove(prodID)
            .then(res => {
                productApi.get('/' + prodID)
                    .then(res => {
                        var productWishlistCount = res.data.wishlist;

                        this.decrement(productWishlistCount)
                            .then(res => {
                                productApi.put('/' + prodID, {wishlist: res})
                            })
                        
                    })
                
                userApi.put('/' + this.state.loggedInUser, {wishlist: this.state.wishlistProductID})
                    .then(res => {
                        alert(prodName + " has been removed from wishlist")
                        
                        window.location = '/wishlist'
                    })
            })

    }

    async updateLocalCart(newID) {
        this.setState(prevState => ({
            cartProductID: [...prevState.cartProductID, newID]
        }))
    }
    
    addToCart(newID, prodName) {
        
        this.updateLocalCart(newID)
            .then(res => {
                userApi.put('/' + this.state.loggedInUser, {cart: this.state.cartProductID})
                    .then(res => {
                        alert(prodName + " has been added to cart")
                        this.localRemove(newID)
                            .then(res => {
                                userApi.put('/' + this.state.loggedInUser, {wishlist: this.state.wishlistProductID})
                                    .then(res => {window.location = '/wishlist'})
                            })
                    })               
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
                                        <button onClick={this.addToCart.bind(this, product._id, product.name)}> Add to Cart </button>
                                        <button onClick = {this.removeFromWishlist.bind(this, product._id, product.name)}> Remove </button>
                                        
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