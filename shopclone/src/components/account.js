import React from 'react';

const account = () => {
    return (
        <form className="signin">
                <h4>Edit Account Details</h4>
                <label>Enter Name</label>
                <input type="text" className="enter" placeholder="Nishant Mahesh"></input> 
                <label>Enter Email</label>
                <input type="text" placeholder="nishant.mahesh_ug22@ashoka.edu.in"></input>
                <label>Enter Password</label>
                <input type="text" placeholder="ostrichPoopCoffee"></input>
                <label>Enter Address</label>
                <input type="text" placeholder="Address Line1"></input>
                <button className="join">Save</button>
        </form>
    )
}

export default account