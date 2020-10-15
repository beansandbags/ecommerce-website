import React from 'react'
import data from '../data';
import {Link} from 'react-router-dom'

function cartScreen(props) {

    return <div>

        <h3 className="cart-items">Shopping Cart</h3>
        <div  className="cart-details">
            {
                data.products.map(product =>
                    <li>
                        <div className="cart-product">
                            <Link to={'/product/' + product._id}>
                                <img className="product-image" src={product.image} alt="" />
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

}

export default cartScreen