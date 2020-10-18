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
        if(this.state.product.features == null) return null;
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
                            <p>Quantity</p>
                            <button className="comment-rating">1</button>
                            <button className="comment-rating">2</button>
                            <button className="comment-rating">3</button>
                            <button className="comment-rating">4</button>
                            <li>
                                <button className="quantity-selector">Add to Cart</button>
                                <button className="quantity-selector"> Add to Wishlist</button>
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
                        <form className="comments">
                            <table>
                                <td>Insert Picture</td>
                                <table>
                                    <tr>
                                        <td>Soham Bagchi</td>
                                        <td>4 out of 5 stars</td>
                                    </tr>
                                    <tr><td>This caused my insomnia</td></tr>
                                </table>
                            </table>
                        </form>
                        <h6>Post Comment</h6>
                        <form className="comments">
                            
                            <input type="text" placeholder= "Comment"></input>
                            <p>Rating</p>
                            <button className="comment-rating">1</button>
                            <button className="comment-rating">2</button>
                            <button className="comment-rating">3</button>
                            <button className="comment-rating">4</button>
                            <button className="comment-rating">5</button>
                        </form>
                    </li>
                </div>
 
            </div>
        )
    }
}
 
export default ProductScreen;