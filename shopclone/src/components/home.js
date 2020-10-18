import React, {Component} from 'react';
import M from 'materialize-css'
import './navbarstyle.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import signin from '../signin.png'

const api = axios.create({
    baseURL: 'http://localhost:5000/api/products'
})

class home extends Component {
    state = {
        productData: []
    }
    constructor() {
        super();
        api.get('/')
            .then(res => {
                this.setState( {productData: res.data})
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
            <main className="main">
            <div class="carousel center">
                            <a class="carousel-item" href="#one!"><img src={signin} /></a>
                            <a class="carousel-item" href="#two!"><img src={signin} /></a>
                            <a class="carousel-item" href="#three!"><img src={signin} /></a>
                        </div>
                <div className="content">
                    <ul className="products">
                        {
                            this.state.productData.map(product =>
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
                                    <button className="quantity-selector"> Add to Cart </button>
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

export default home