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
        product: [],
        comment: "",
        userID: null,
        currentUserName: null,
        currentUserPhoto: null,
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
                    this.setState( {userID: res.data._id, currentUserName: res.data.name, currentUserPhoto: res.data.photo })
                })
                .catch(err => console.error(err))
        this.publish1 = this.publish1.bind(this);
        this.publish2 = this.publish2.bind(this);
        this.publish3 = this.publish3.bind(this);
        this.publish4 = this.publish4.bind(this);
        this.publish5 = this.publish5.bind(this);      
        this.handleChange = this.handleChange.bind(this);   
    }
    
    async handleChange({target}){
        this.setState({
            [target.name]: target.value
        });
    }
 
    publish1(e) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: 1,
            comment: this.state.comment,
            date: Date.now
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+1)/(oldLength+1)
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
    
    publish2(e) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: 2,
            comment: this.state.comment,
            date: Date.now
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+2)/(oldLength+1)
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
    
    publish3(e) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: 3,
            comment: this.state.comment,
            date: Date.now
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+3)/(oldLength+1)
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
    
    publish4(e) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: 4,
            comment: this.state.comment,
            date: Date.now
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+4)/(oldLength+1)
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
    
    publish5(e) {
        e.preventDefault()
        var oldComments = this.state.product.comments
        var oldLength = oldComments.length
        var newComment = {
            userID: this.state.userID,
            userName: this.state.currentUserName,
            userPhoto: this.state.currentUserPhoto,
            rating: 5,
            comment: this.state.comment,
            date: Date.now
        }
        oldComments.push(newComment)
        const newAvgRating = ((this.state.product.avgRating*oldLength)+5)/(oldLength+1)
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
    
    render() {
        if(this.state.product.features == null) return null;

        var existingReviews = 0;
        if(this.state.product.comments.length == 0){
            var existingReviews = "This Product has not been reviewed yet.";            
        } else {
            var existingReviews =        this.state.product.comments.map(review =>
                <table>
                    <td><img src={review.userPhoto}/></td>
                    <table>
                        <tr>
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
            
            <button className="comment-rating" value="Send" onClick={this.publish1}>1</button>
            <button className="comment-rating" value="Send" onClick={this.publish2}>2</button>
            <button className="comment-rating" value="Send" onClick={this.publish3}>3</button>
            <button className="comment-rating" value="Send" onClick={this.publish4}>4</button>
            <button className="comment-rating" value="Send" onClick={this.publish5}>5</button>
            
        </form></div>;
        if(userHasReviewed == 1){
            reviewPanel = <p></p>
        }

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