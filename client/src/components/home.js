import React, {Component} from 'react';
import sky from '../sky.png'
import M from 'materialize-css'
import './navbarstyle.css'

class home extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                shift: 50,
                numVisible: 3
            });
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel1');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                numVisible: 5,
                dist: 0,
                shift: 10,
                padding: 10,
            });
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel2');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                numVisible: 5,
                dist: 0,
                shift: 10,
                padding: 10,
            });
          });
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel3');
            var instances = M.Carousel.init(elems, {
                indicators: true,
                numVisible: 5,
                dist: 0,
                shift: 10,
                padding: 10,
            });
          });
    }

    render() {
        return (
        
        <div className= "center">
            <div class="carousel center">
                <a class="carousel-item" href="#one!"><img src={sky} /></a>
                <a class="carousel-item" href="#two!"><img src={sky} /></a>
                <a class="carousel-item" href="#three!"><img src={sky} /></a>
                <a class="carousel-item" href="#four!"><img src={sky} /></a>
                <a class="carousel-item" href="#five!"><img src={sky} /></a>
                <a class="carousel-item" href="#six!"><img src={sky} /></a>
                <a class="carousel-item" href="#seven!"><img src={sky} /></a>
                <a class="carousel-item" href="#eight!"><img src={sky} /></a>
                <a class="carousel-item" href="#nine!"><img src={sky} /></a>
            </div>
                        
            <h3>Featured Products</h3>
             <div className="carousel1">
                <div class="carousel carousel1 center grey">
                    <a class="carousel-item" href="#one!"><img src={sky} /></a>
                    <a class="carousel-item" href="#two!"><img src={sky} /></a>
                    <a class="carousel-item" href="#three!"><img src={sky} /></a>
                    <a class="carousel-item" href="#four!"><img src={sky} /></a>
                    <a class="carousel-item" href="#five!"><img src={sky} /></a>
                    <a class="carousel-item" href="#six!"><img src={sky} /></a>
                    <a class="carousel-item" href="#seven!"><img src={sky} /></a>
                    <a class="carousel-item" href="#eight!"><img src={sky} /></a>
                    <a class="carousel-item" href="#nine!"><img src={sky} /></a>
                </div>
            </div>

            <h3>Popular Products</h3>
            <div className="carousel2">
                <div class="carousel carousel2 center grey">
                    <a class="carousel-item" href="#one!"><img src={sky} /></a>
                    <a class="carousel-item" href="#two!"><img src={sky} /></a>
                    <a class="carousel-item" href="#three!"><img src={sky} /></a>
                    <a class="carousel-item" href="#four!"><img src={sky} /></a>
                    <a class="carousel-item" href="#five!"><img src={sky} /></a>
                    <a class="carousel-item" href="#six!"><img src={sky} /></a>
                    <a class="carousel-item" href="#seven!"><img src={sky} /></a>
                    <a class="carousel-item" href="#eight!"><img src={sky} /></a>
                    <a class="carousel-item" href="#nine!"><img src={sky} /></a>
                </div>
            </div>

            <h3>Recommended Products</h3>
            <div className="carousel3">
                <div class="carousel carousel3 center grey">
                    <a class="carousel-item" href="#one!"><img src={sky} /></a>
                    <a class="carousel-item" href="#two!"><img src={sky} /></a>
                    <a class="carousel-item" href="#three!"><img src={sky} /></a>
                    <a class="carousel-item" href="#four!"><img src={sky} /></a>
                    <a class="carousel-item" href="#five!"><img src={sky} /></a>
                    <a class="carousel-item" href="#six!"><img src={sky} /></a>
                    <a class="carousel-item" href="#seven!"><img src={sky} /></a>
                    <a class="carousel-item" href="#eight!"><img src={sky} /></a>
                    <a class="carousel-item" href="#nine!"><img src={sky} /></a>
                </div>
            </div>
        </div>
            )
    }
}

export default home