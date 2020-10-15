import React, {Component} from 'react';
import data from '../data'
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import sky from "../sky.png"


const api = axios.create({
    baseURL: 'http://localhost:5000/api/products/chocolates'
})

class chocolate extends Component {
    state = {
        chocolateData: []
    }

    constructor() {
        super();
        api.get('/')
            .then(res => {
                this.setState( {chocolateData: res.data})
            })
            .catch(err => console.error(err))
    }

   componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                shift: 50,
                numVisible: 3
            });
          });
    }

    render() {
        return (
            

            <div className="grid-container">
                <h3 className="cart-items">Chocolate</h3>
            <main className="main">
                <div className="content">
                    <ul className="products">
                        {
                            this.state.chocolateData.map(product =>
                                <li><div className="product">
                                    <Link to={'/product/' + product._id}>
                                        <img className="product-image" src={"http://localhost:5000/" + product.productImage} alt="" />
                                    </Link>
                                    <div className="product-name">
                                        <Link to={'/product/' + product._id}>{product.name}</Link>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">Rs {product.price}</div>
                                    <div className="product-rating">{5} Stars ({5} Reviews)</div>
                                </div></li>
                            )
                        }
                    </ul>
                </div>
            </main>
        </div>      
        
            )
    }
}

export default chocolate