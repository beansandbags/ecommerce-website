import React, {Component} from 'react';
import './navbarstyle.css'

class signin extends Component {


    render() {
        return (
            <form className="signin">
                <h4>Login</h4>
                <label>Enter Email Address</label>
                <input type="text" className="enter"></input> 
                <label>Enter Password</label>
                <input type="text" ></input>
                <button className="join">Log In</button>
            </form>
    
        )
    }
}



export default signin