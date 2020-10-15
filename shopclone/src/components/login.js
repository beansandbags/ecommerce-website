import React, {Component} from 'react';
import './navbarstyle.css'

class signin extends Component {


    render() {
        return (
            <div>
            <form className="signin">
                <h4>Login</h4>
                <label>Enter Email Address</label>
                <input type="text" className="enter"></input> 
                <label>Enter Password</label>
                <input type="text" ></input>
                <button className="join">Log In</button>
                <div>
                <h6>Don't have an account yet?</h6>
                <a className="join1" href="/signup">Sign up here!</a>
            </div>
            </form>
            
            </div>
        )
    }
}



export default signin