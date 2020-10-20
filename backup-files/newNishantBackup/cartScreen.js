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
        cartProductData: [],
        loggedInUser: "",
        curr_transaction_h: [],
        totalCartValue: 0
        
    }

    


    constructor() {
        super();
    

        userApi.get('/', config)
            .then(res => {
                this.setState( {cartProductID: res.data.cart, loggedInUser: res.data._id, curr_transaction_h: res.data.transaction_h})
                
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
            this.checkOut = this.checkOut.bind(this);
            this.goHome = this.goHome.bind(this);
    }

    async calcTotalPrice() {
        var i;
        var totalPrice = 0;
        for(i = 0; i < this.state.cartProductData.length; i++) {
            totalPrice += this.state.cartProductData[i].price;
            
            // this.state.totalCartValue += this.state.cartProductData[i].price;
        }
        this.setState({totalCartValue: totalPrice})
    }

    async localCheckOut() {
        
        alert("HEre!")
        this.calcTotalPrice()
            .then(res => {
                var tempTransaction = {
                    productID: this.state.cartProductID,
                    date: Date.now,
                    value: this.state.totalCartValue
                }
                alert(this.state.curr_transaction_h.length)
                this.setState(prevState => ({
                    curr_transaction_h: [...prevState.curr_transaction_h, tempTransaction]
                }))
                alert(this.state.curr_transaction_h.length)
                this.setState({cartProductID: []})
                
            })
            .catch(err => console.error(err));   
    }

    checkOut(e) {
        e.preventDefault()
        this.localCheckOut()
            .then(res => {
                alert("YES: ", this.state.totalCartValue)
                userApi.put('/' + this.state.loggedInUser, {
                    transaction_h: this.state.curr_transaction_h,
                    cart: this.state.cartProductID,
                })

            })
            .catch(err => console.error(err))

    }

    goHome(e) {
        e.preventDefault()
        window.location = '/'
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
                        <button className="join" onClick={this.checkOut} > Buy These! </button>
                        <p className="done2"> Oh, you're thirsty for even more? </p>
                        <button className="join" onClick={this.goHome}> Shop More!  </button>
                    </form>
            </div>
        )
    }

}

export default cartScreen
