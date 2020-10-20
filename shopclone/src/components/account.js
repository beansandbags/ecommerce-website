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
        profileData: {},
        userID: null,
        addressBox: "",
    }
 
    constructor() {
        super();
        api.get('/', config)
            .then(res => {
                this.setState( {profileData: res.data, userID: res.data._id})
                console.log(this.state.userID)
            })
            .catch(err => console.error(err))
        this.publish = this.publish.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
 
    async handleChange({target}){
        this.setState({
            [target.name]: target.value
        });
    }
 
    publish(e) {
        e.preventDefault()
        var addr = this.state.addressBox
        var ID = this.state.userID
        api.get('/addressUpdate/' + ID + '/' + addr, config)
            .then(res => {
                console.log("address changed")
                alert("Address Changed Successfully")
                window.location = "/"
        })
    }
    
 
    render() {
        //if(this.state.profileData == null) return null;
        var cartNum = 0;
        if(this.state.userExists){
            if(this.state.profileData.address == ""){
                cartNum = 0
            } else {
                cartNum = this.state.profileData.cart
            }
        } else {
            cartNum = 0
        }
        
        if(this.state.profileData.address == ""){
            var addressInput = "Please Enter Your Address (Required)"
        } else {
            var addressInput = this.state.profileData.address
        }
 
        return (
            <form className="signin">
                    <h4>Edit Account Details</h4>
                    <label>Name</label>
                    <input type="text" className="enter" value= {this.state.profileData.name} readonly></input> 
                    <label>Email</label>
                    <input type="text" value={this.state.profileData.email} readonly></input>
                    <label>Enter Address</label>
                    <input type="text" placeholder={addressInput} name="addressBox" value={this.state.addressBox} onChange={this.handleChange}></input>
                    <button className="join" value="Send" onClick={this.publish}>Register</button>
            </form>
        )
    }
}
 
export default account
 
