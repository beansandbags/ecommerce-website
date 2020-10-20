import React, {Component} from 'react';
import data from '../data'
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
 



class history extends Component {




    render() {
        return (

        <div>
            <h3 className="cart-items">Your Past Orders</h3>
            <div>
                <hr></hr>
                <h4 className="history-date">Date</h4>
                <ul className="history-table">
                {
                    data.products.map(product =>
                        <table>
                            <tr>
                                <td>
                                <div className="history-name">
                                    <Link to={'/product/' + product._id}>{product.name}</Link>
                                </div>
                                </td>
                                <td>
                                <div className="history-price">Rs {product.price}</div>
                                </td>
                            </tr>
                        </table>
                    )
                }
                <h6 className="history-value">Total Value</h6>
                </ul>
            </div>
 
            <div>
                <hr></hr>
                <h4 className="history-date">Date</h4>
                <ul className="history-table">
                {
                    data.products.map(product =>
                        <table>
                            <tr>
                                <td>
                                <div className="history-name">
                                    <Link to={'/product/' + product._id}>{product.name}</Link>
                                </div>
                                </td>
                                <td>
                                <div className="history-price">Rs {product.price}</div>
                                </td>
                            </tr>
                        </table>
                    )
                }
                <h6 className="history-value">Total Value</h6>
                </ul>
            </div>
            <hr></hr>
        </div>
 
        
        
            )
    }
}
 
export default history
