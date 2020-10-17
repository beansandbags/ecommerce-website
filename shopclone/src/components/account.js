import React, {Component} from 'react';
import axios from 'axios'


const api = axios.create({
    baseURL: 'http://localhost:5000/profile'
})

const config = {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
};

class account extends Component {
    state = {
        profileData: {}

    }

    constructor() {
        super();
        api.get('/', config)
            .then(res => {
                this.setState( {profileData: res.data})
                console.log(this.state.profileData.address[0])
            })
            .catch(err => console.error(err))
    }

    render() {
        if(this.state.profileData.address == null) return null;

        return (
            <form className="signin">
                    <h4>Edit Account Details</h4>
                    <label>Enter Name</label>
                    <input type="text" className="enter" placeholder= {this.state.profileData.name} ></input> 
                    <label>Enter Email</label>
                    <input type="text" placeholder={this.state.profileData.email}></input>
                    <label>Enter Password</label>
                    <input type="text" placeholder="ostrichPoopCoffee"></input>
                    <label>Enter Address</label>
                    <input type="text" placeholder= {this.state.profileData.address[0]}></input>
                    <button className="join">Save</button>
            </form>
        )
    }
}

export default account