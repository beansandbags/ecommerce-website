import React, {Component} from 'react';
import data from '../data'
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
import axios from 'axios';

 
const api = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

const prodApi = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})
 
const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};
 
 

class history extends Component {
    state = {
        profileData: {},
        transHistory: [],
        newTransHistory: [],
        userID: null,
    }
 
    constructor() {
        super();
        api.get('/', config)
            .then(res => {
                this.setState( {profileData: res.data, userID: res.data._id, transHistory: res.data.transaction_h})
                console.log(this.state.userID)
            })
            .then(res => {
                var largest = 0
                for(var i = 0; i < this.state.transHistory.length; i++){
                    if(this.state.transHistory[i].productID.length > largest){
                        largest = this.state.transHistory[i].productID.length
                    }
                }
                alert("yes" + largest)

                var innerArray = new Array(largest)
                alert("here1" + innerArray.length)
                var newTransHistArray = [[null]*largest]*this.state.transHistory.length
                alert("here" + newTransHistArray[0].length)
                for(var i = 0; i < this.state.transHistory.length; i++){
                    for(var j = 0; j < this.state.transHistory[i].productID.length; j++){
                        prodApi.get('/' + this.state.transHistory[i].productID[j])
                            .then(res => {
                                newTransHistArray[i][j] = res.data
                            })
                    }
                }
                alert("A comment that I'll remove")


            })
            .catch(err => console.error(err))
            //alert(this.state.newTransHistory.length)
    }
  
 


    render() {
        if(this.state.transHistory == null) return null

        //alert(this.state.newTransHistory.length)
        var transHistoryCopy = this.state.transHistory
        /*for(var i = 0; i < transHistoryCopy.length; i++){
            for(var j = 0; j < transHistoryCopy[i].productID.length; j++){
                var prod = transHistoryCopy[i].productID[j]
                //alert(prod)
                //transHistoryCopy[i].productID[j] = this.getProduct(prod)
            }
        }*/

        return (

        <div>
            <h3 className="cart-items">Your Past Orders</h3>
            <div>
                <hr></hr>
                {
                    transHistoryCopy.map(transaction =>
                        <div>
                        <h4 className="history-date">{transaction.date}</h4>
                        <ul className="history-table">
                        {
                            transaction.productID.map(product =>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="history-name">
                                                <Link to={'/product/' + product._id}>
                                                    {product.name}
                                                </Link>
                                            </div>"
                                        </td>
                                        <td>
                                            <div className="history-price">Rs. {product.price}</div>
                                        </td>
                                    </tr>
                                </table>    
                            )
                        }
                        </ul>
                        <h6 className="history-value">Total Value: {transaction.value}</h6>
                        </div>
                        )
                }
            </div>
            <hr></hr>
        </div>
 
        
        
            )
    }
}
 
export default history
