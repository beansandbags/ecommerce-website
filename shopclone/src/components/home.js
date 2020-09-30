import React, {Component} from 'react';
import sky from '../sky.png'
import M from 'materialize-css'
import './navbarstyle.css'

class home extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.carousel');
            var instances = M.Carousel.init(elems, {});
          });
    }

    render() {
        return (
            <div class="carousel center">
                <a class="carousel-item" href="#one!"><img src={sky} /></a>
                <a class="carousel-item" href="#two!"><img src={sky} /></a>
                <a class="carousel-item" href="#three!"><img src={sky} /></a>
                <a class="carousel-item" href="#four!"><img src={sky} /></a>
            </div>
            )
    }
}

export default home