import React, {Component} from 'react';
import data from '../data';
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

class ProductScreen extends Component {

    state = {
        product: []
    }
    constructor(props) {
        super();
        api.get('/' + props.match.params.id)
            .then(res => {
                this.setState( {product: res.data})
            })
            .catch(err => console.error(err))
    }
    
    
    render() {
        return (
            <div>
            
                <div  className="details">
                    <div className="details-image">
                        <img className="product-image" src={"http://localhost:5000/" + this.state.product.productImage} alt="" />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h4>{this.state.product.name}</h4>
                            </li>
                            <li>
                                {5} Stars ({5} Reviews)
                            </li>
                            <li><b>Price: Rs {this.state.product.price} </b></li>
                            <li>
                                <button>Add to Cart</button>
                                <button> Add to Wishlist</button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="details-description">
                    <li> <h4>Description:</h4> 
                        <div>{this.state.product.features}</div>
                    </li>
                    <li>
                        <h4>Comments and Reviews</h4>
                    </li>
                </div>

            </div>
        )
    }
}

export default ProductScreen;