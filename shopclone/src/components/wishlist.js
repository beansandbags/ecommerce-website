import React from 'react'
import data from '../data';
import {Link} from 'react-router-dom'

function wishlist(props) {

    return <div>

        <h3 className="cart-items">Wish List</h3>
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
    </div>

}

export default wishlist