import React, {Component} from 'react';
import axios from 'axios'
 
const api = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

const userApi = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};
 
 
class ProductScreen extends Component {
 
    state = {
        product: {},
        comment: "",
        userID: null,
        currentUserName: null,
        currentUserPhoto: null,
        transHistory: null,
        cartProductID:[],
        wishlistProductID: []
    }
    constructor(props) {
        super();
        api.get('/' + props.match.params.id)
            .then(res => {
                this.setState( {product: res.data})
            })
            .catch(err => console.error(err))
        userApi.get('/', config)
                .then(res => {
                    this.setState( {userID: res.data._id, currentUserName: res.data.name, currentUserPhoto: res.data.photo, transHistory: res.data.transaction_h, cartProductID: res.data.cart, wishlistProductID: res.data.wishlist })
                })
                .catch(err => console.error(err))
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);   
    }
    
    async handleChange({target}){
        this.setState({
            [target.name]: target.value
        });
    }
 
    publish(e, num) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var didBuy = false;
        if(this.state.transHistory.length > 0){
            for(var i = 0; i < this.state.transHistory.length; i++){
                for(var j = 0; j < this.state.transHistory[i].productID.length; j++){
                    if(this.state.transHistory[i].productID[j] == this.state.product._id){
                        didBuy = true;
                    }
                }
            }
        } else {
            didBuy = false;
        }
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: num,
            comment: this.state.comment,
            date: Date.now,
            verified: didBuy
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+num)/(oldLength+1)
        var newReview = {
            avgRating: newAvgRating,
            comments: oldComments
        }
        api.put('/' + this.state.product._id, newReview)
            .then(res => {
                alert("Review Submitted")
                window.location = "/product/" + this.state.product._id
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
                userApi.put('/' + this.state.userID, {cart: this.state.cartProductID})
                    .then(res => {
                        alert(prodName + " has been added to cart")
                    })         
                    .catch(err => console.error(err));
            })
            .catch(err => console.error(err));
    }

    async updateLocalWishlist(newID) {
        this.setState(prevState => ({
            wishlistProductID: [...prevState.wishlistProductID, newID]
        }))
    }

    async updateProductWishlistCount() {
        var newWishlistCount = this.state.product.wishlist + 1;
        this.state.product.wishlist = newWishlistCount;
    }
    
    addToWishlist(newID, prodName) {    
        
        this.updateLocalWishlist(newID)
            .then(res => {
                
                
                userApi.put('/' + this.state.userID, {wishlist: this.state.wishlistProductID})
                    .then(res => {
                        alert(prodName + " has been added to wishlist")
                        this.updateProductWishlistCount()
                            .then(res => {
                                api.put('/' + newID, { wishlist: this.state.product.wishlist})
                    })


                    })                             
            })
            .catch(err => console.error(err));
    }

    

    render() {
        if(this.state.product.features == null) return null;
        var verifiedUserButton = <i className="material-icons" alt="Verified User">check</i>
        var existingReviews = 0;
        if(this.state.product.comments.length == 0){
            var existingReviews = "This Product has not been reviewed yet.";            
        } else {
            var existingReviews = this.state.product.comments.map(review =>
                <table>
                    <td><img src={review.userPhoto}/></td>
                    <table>
                        <tr>
                            <td>{review.verified && verifiedUserButton}</td>
                            <td>{review.userName}</td>
                            <td>{review.rating} out of 5 stars</td>
                        </tr>
                        <tr><td>{review.comment}</td></tr>
                    </table>
                </table>
            );
        }
        var userHasReviewed = 0;
        for(var i = 0; i < this.state.product.comments.length; i++){
            if(this.state.product.comments[i].userID == this.state.userID){
                userHasReviewed = 1
            }
        }
        var reviewPanel = <div><h6>Post Comment</h6>
        <form className="comments">
            <input type="text" placeholder="Enter Comment" name="comment" value={this.state.comment} onChange={this.handleChange}></input>
            <p>Rating</p>
            
            <button className="comment-rating" value="1" onClick={(e) => this.publish(e, 1)}>1</button>
            <button className="comment-rating" value="2" onClick={(e) => this.publish(e, 2)}>2</button>
            <button className="comment-rating" value="3" onClick={(e) => this.publish(e, 3)}>3</button>
            <button className="comment-rating" value="4" onClick={(e) => this.publish(e, 4)}>4</button>
            <button className="comment-rating" value="5" onClick={(e) => this.publish(e, 5)}>5</button>
            
        </form></div>;
        if(userHasReviewed == 1){
            reviewPanel = <p></p>
        }

        return (
            <div>
            
                <div  className="details">
                <table className="iproducts">
                        <td>
                        <img className="product-image" src={"http://localhost:5000/" + this.state.product.productImage} alt="" />
                        </td>
                        <table className="iproducts-info"> 
                            <tr>
                                <h4>{this.state.product.name}</h4>
                            </tr>
                            <tr>
                                {this.state.product.avgRating} Stars ({this.state.product.comments.length} Reviews)
                            </tr>
                            <tr><b>Price: Rs {this.state.product.price} </b></tr>
                               <tr>
                               <button onClick={this.addToCart.bind(this, this.state.product._id, this.state.product.name)} className="quantity-selector"> Add to Cart </button>
                               <button onClick={this.addToWishlist.bind(this, this.state.product._id, this.state.product.name)} className="quantity-selector"> Add to Wishlist </button>
                                </tr>
                            </table>
                    </table>
                </div>
                <div className="details-description">
                    <li> <h4>Description:</h4> 
                        <div>{this.state.product.features.map(features => 
                            <p>{features}</p>
                            )}</div>
                    </li>
                    <li>
                        <h4>Comments and Reviews</h4>
                        <form className="comments">
                        {existingReviews}
                        </form>
                        {reviewPanel}
                    </li>
                </div>
 
            </div>
        )
    }
}
 
export default ProductScreen;