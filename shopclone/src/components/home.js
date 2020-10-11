import React, {Component} from 'react';
import sky from '../sky.png'
import data from '../data'
import M from 'materialize-css'
import './navbarstyle.css'

class home extends Component {

    openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open")
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
                            <a class="carousel-item" href="#one!"><img src={sky} /></a>
                            <a class="carousel-item" href="#two!"><img src={sky} /></a>
                            <a class="carousel-item" href="#three!"><img src={sky} /></a>
                        </div>
                <div className="content">
                    <ul className="products">
                        {
                            data.products.map(product =>
                                <li><div className="product">
                                    <img className="product-image" src={product.image} alt="" />
                                    <div className="product-name">
                                        <a href="product.html">{product.name}</a>
                                    </div>
                                    <div className="product-brand">{product.brand}</div>
                                    <div className="product-price">Rs {product.price}</div>
                                    <div className="product-rating">{product.rating} Stars ({product.numReviews} Reviews)</div>
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