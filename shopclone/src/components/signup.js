import React, {Component} from 'react';
import './navbarstyle.css'

class login extends Component {


    render() {
        return (
            <form className="signin">
                <h4>Sign up</h4>
                <label>Enter Name</label>
                <input type="text" className="enter"></input> 
                <label>Enter Email</label>
                <input type="text" ></input>
                <label>Enter Password</label>
                <input type="text" ></input>
                <label>Enter Address</label>
                <input type="text" ></input>
            </form>
    
        )
    }
}



export default login