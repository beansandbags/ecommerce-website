import React, {Component} from 'react';
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
            /*
            .then(res => {
                for(var i = 0; i < this.state.transHistory.length; i++){
                    var transID = this.state.transHistory[i]._id
                    //alert("TransID: " + transID)
                    var prodObjArr = new Array(this.state.transHistory[i].productID.length)
                    for(var j = 0; j < this.state.transHistory[i].productID.length; j++){
                        prodApi.get('/' + this.state.transHistory[i].productID[j]) //This is the ID of the prodct
                               .then(prodRes => {
                                    prodObjArr[j] = prodRes.data //prodRes.data is the json of the product
                                    //alert("Name: " + prodObjArr[j].name)
                               })
                    }
                    //alert("Reaching Here")
                    //alert("prodObjArr.id: " + prodObjArr[0]._id)
                    this.setState(prevState => ({
                        transHistory: prevState.transHistory.map(
                        obj => (obj._id === transID ? Object.assign(obj, { productObjects: prodObjArr }) : obj)
                      )
                    }));
                    //alert("ProductID Length: " + this.state.transHistory[i].productID[0].name)
                }
            })*/
            .catch(err => console.error(err))
            //alert(this.state.newTransHistory.length)
    }
  
 


    render() {
        if(this.state.transHistory == null) return null

    
        return (

        <div>
            <h3 className="cart-items">Your Past Orders</h3>
            <div>
                {
                    this.state.transHistory.map(transaction =>
                        <div>
                        <h4 className="history-date">{transaction.date}</h4>
                        <ul className="history-table">
                        {
                            transaction.productObjects.map(product =>
                                <table>
                                    <tr>
                                        <td>
                                            <div className="history-name">
                                                <Link to={'/product/' + product._id}>
                                                    {product.name}
                                                </Link>
                                            </div>
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
        </div>
 
        
            )
    }
}
 
export default history
