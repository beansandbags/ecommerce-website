import React from 'react';
import sky from '../sky.png';
import './navbarstyle.css';

const Iproduct = () => {
    return (
        <div class="ipro">
            <div className="details">
                <div className="big-img">
                    <img src={sky} />
                </div>

                <div className="box">
                    <div className="row">
                        <h4>Coffee1</h4>
                        <h5>Rs. 5,000</h5>
                    </div>
                </div>

                <p>This is the best coffee in the world</p>

                <button className="cart">Add to cart</button>

            </div>
        </div>
    )
}

export default Iproduct