import React from 'react';
import data from '../data';

function ProductScreen(props) {

    const product = data.products.find(x => x._id === parseInt(props.match.params.id));

    return <div>
        
            <div  className="details">
                <div className="details-image">
                    <img className="product-image" src={product.image} alt="" />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h4>{product.name}</h4>
                        </li>
                        <li>
                            {product.rating} Stars ({product.numReviews} Reviews)
                        </li>
                        <li><b>Price: Rs {product.price} </b></li>
                        <li>
                            <div>Quantity</div>
                            <button className="option">1</button>
                            <button className="option">2</button>
                            <button className="option">3</button>
                            <button className="option">4</button>
                        </li>
                        <li>
                            <button>Add to Cart</button>
                            <button> Add to Wishlist</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="details-description">
                <li> <h4>Description:</h4> 
                    <div>{product.features.poop}</div>
                </li>
                <li>
                    <h4>Comments and Reviews</h4>
                </li>
            </div>

        </div>

    
}

export default ProductScreen;