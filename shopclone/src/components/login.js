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
                <table>
                <tr>
                    <td><button className="join">Log In</button></td>
                    <td><button className="join"><a href="http://localhost:5000/auth/google">Google+</a></button></td>
                    <td><button className="join">Facebook</button></td>
                </tr>
                </table>
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